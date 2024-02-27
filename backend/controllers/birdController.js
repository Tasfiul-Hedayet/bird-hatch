const prisma = require('../util/db');
const catchAsync = require('../util/catchAsync');
const AppError = require('../util/appError');


exports.createNewBird = catchAsync(async(req, res, next) => {
    const wId = parseInt(req.body.weights_id, 10);
    // console.log('weight type: ', wId);
    const newBird = await prisma.birds.create({
        data: {
            name: req.body.name,
            species: req.body.species,
            breed: req.body.breed,
            sex: req.body.sex,
            breeder: req.body.breeder,
            owner: req.body.owner,
            cockParent: req.body.cockParent,
            henParent: req.body.henParent,
            hatchBatch: req.body.hatchBatch,
            sold: (new Date(req.body.sold)).toISOString(),
            deceased: (new Date(req.body.deceased)).toISOString(),
            hatch_date: (new Date(req.body.hatch_date)).toISOString(),
            location: req.body.location,
            color: req.body.color,
            healthEvents: req.body.healthEvents,
            showPlacing: req.body.showPlacing,
            weights: wId,
        }
    })

    res.status(201).json({
        status: 'success',
        data: {
            newBird
        }
    });
    
    next();
})


exports.findAllBirds = catchAsync(async(req, res, next) => {
    const allBirds = await prisma.birds.findMany({
        include: {
            leg_tag: true,
        }
    });

    res.status(200).json({
        status: 'success',
        data: {
            allBirds
        }
    });
    
    next();

})

exports.findAbird = catchAsync(async(req, res, next) => {
    const bird = await prisma.birds.findUnique({
        where: {
            bird_id: parseInt(req.params.id)
        },
        include: {
            leg_tag: true
        }
    });

    if(!bird){
        res.status(404).json({
            status: 'fail',
            error: 'Bird Not found!'
        })
        return next(new AppError('The bird doesnot exist', 404));
    }

    res
       .status(200)
       .json({
            status: 'success',
            data: {
                bird
            }
       })

       next();
})

exports.deleteAbird = catchAsync(async(req, res, next)=>{
    const bird = await prisma.birds.findUnique({
        where: {
            bird_id: parseInt(req.params.id)
        }
    })

    if(!bird){
        res.status(404).json({
            status: 'fail',
            error: 'Bird Not found!'
        })
        return next(new AppError('The bird doesnot exist', 404));
    }

    await prisma.birds.delete({
        where: {
            bird_id: bird.bird_id
        }
    });

    res
       .status(200)
       .json({
            status: '',
            data: {
                message: `${bird.name} has been deleted`
            }
       })

    next();
})

exports.updateAbird = catchAsync(async(req, res, next) => {
    const WId = parseInt(req.body.weights_id, 10);
    const updatedBird = await prisma.birds.update({
        where: {
            bird_id: parseInt(req.params.id)
        },
        data: {
            name: req.body.name,
            species: req.body.species,
            breed: req.body.breed,
            sex: req.body.sex,
            breeder: req.body.breeder,
            owner: req.body.owner,
            cockParent: req.body.cockParent,
            henParent: req.body.henParent,
            hatchBatch: req.body.hatchBatch,
            sold: (new Date(req.body.sold)).toISOString(),
            deceased: (new Date(req.body.deceased)).toISOString(),
            hatch_date: (new Date(req.body.hatch_date)).toISOString(),
            location: req.body.location,
            color: req.body.color,
            healthEvents: req.body.healthEvents,
            showPlacing: req.body.showPlacing,
            weights: WId,
        }
    })

    res.status(200).json({
        status: 'success',
        data: {
            updatedBird
        }
    });
    next();
})