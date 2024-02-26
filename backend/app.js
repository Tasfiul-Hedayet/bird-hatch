const express = require('express');
const prisma = require('./util/db');
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config({ path: './.env' });

const corsOptions = {
    origin: process.env.CORS_ORIGIN, // or specify your allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
app.use(cors(corsOptions));


const birdRoutes = require('./routes/birdRoute');
const weightRoutes = require('./routes/weightRoute');



//Middlewares
app.use(express.json());
app.use(upload.none());
app.use(bodyParser.json())


//Route Middlewares
app.use('/api/v1/birds', birdRoutes);
app.use('/api/v1/weights', weightRoutes);


app.get('/', async(req, res) => {
    try {
        birds = await prisma.birds.findMany();
        res.status(200).json(birds)
    } catch (error) {
        console.log(error);
    }
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`App running on port ${port} . . .`);
});