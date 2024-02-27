const prisma = require('../util/db');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/appError');
const { weights } = require('../prisma/weights');

exports.createWeight = catchAsync(async(req, res, next) => {
    const weightVal = parseFloat(req.body.Weight);
    const newWeight = await prisma.weights.create({
        data: {
            leg_tag: req.body.leg_tag,
            Date: (new Date(req.body.Date)).toISOString(),
            Weight: weightVal
        }
    })

    res.status(201).json({
        status: 'success',
        data: {
            newWeight
        }
    });
    
    next();
})

exports.getAllWeights = catchAsync(async(req, res, next) => {
    const allWeights = await prisma.weights.findMany();

    res.status(200).json({
        status: 'success',
        data: {
            allWeights
        }
    })
    next()
})

exports.getSpecificWeight = catchAsync(async(req, res, next) => {
    const weight_id = parseInt(req.params.id);
    const weight = await prisma.weights.findUnique({
        where: {
            weight_id: weight_id
        },
        // include: {
        //     birds: true
        // }
    })

    if(!weight){
        res.status(404).json({
            status: 'fail',
            error: 'Weight Not found!'
        })
        return next(new AppError('The weight category doesnot exist', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            weight
        }
    })

    next();
})

exports.updateWeight = catchAsync(async(req, res, next) => {
    const updatedWeight = await prisma.weights.update({
        where: {
            weight_id: parseInt(req.params.id)
        },
        data: {
            leg_tag: req.body.leg_tag,
            Date: (new Date(req.body.Date)).toISOString(),
            Weight: req.body.Weight
        }
    })

    res.status(200).json({
        status: 'success',
        data: {
            updatedWeight
        }
    });

    next();
});


exports.deleteWeight = catchAsync(async(req, res, next)=>{
    const weight = await prisma.weights.findUnique({
        where: {
            weight_id: parseInt(req.params.id)
        },
        include: {
            birds: true
        }
    })

    if(!weight){
        res.status(404).json({
            status: 'fail',
            error: 'Weight Not found!'
        })
        return next(new AppError('The weight category doesnot exist', 404));
    }

    if(weight.birds.length != 0){
        res.status(400).json({
            status: 'fail',
            error: `Delete ${weight.birds[0].name} from the birds table first and try again`
        })
        return next(new AppError('The weight category cannot be deleted', 404));
    }

    await prisma.weights.delete({
        where: {
            weight_id: weight.weight_id
        }
    });

    res
       .status(200)
       .json({
            status: 'Success',
            data: {
                message: `Weight category with Leg Tag: ${weight.leg_tag} has been deleted.`
            }
       })

    next();
})
