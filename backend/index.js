const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createSecretToken } = require("./util/SecretToken");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');

const PositionsModel = require('./model/PositionsModel');
const OrdersModel = require('./model/OrdersModel');
const HoldingsModel = require('./model/HoldingsModel');
const User = require('./model/UserModel');
const { userVerification } = require('./middleware/AuthMiddleware');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/allHoldings', async (req, res) => {
    const allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
});

app.get('/allPositions', async (req, res) => {
    const allPositions = await PositionsModel.find();
    res.json(allPositions);
});

app.post('/newOrder', async (req, res) => {
    const newOrder = req.body;
    const response = await OrdersModel.create(newOrder);
    res.json(response);
});

app.post('/signup', async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
});

app.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({ message: "User logged in successfully", success: true });
        next()
    } catch (error) {
        console.error(error);
    }
});


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
    mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected');
});