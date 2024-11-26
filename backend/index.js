const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./connect')


const PORT = process.env.PORT || 5000;
const userId_routes = require("./routes/UserId");
const onboarding_route = require("./routes/OnBoarding.js")

//For sending response
app.get('/', (req, res) => {
    res.send("Hello Response");
})

app.use(express.json()); // Middleware to parse JSON body
app.use(cors());

// Onboarding routes
app.use('/api/onboarding', onboarding_route);
//middleware to set router
app.use("/api/userId", userId_routes);

//For checking if Port is working
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})

//Connection Method
const start = async () => {
    try{
        await connectDB();
        console.log("Database Connected");
    }
    catch(error){
        console.log(error);
    }
}

start();