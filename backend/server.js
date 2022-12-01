const path = require('path');
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()     // COnnect our MongoDB

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Our Main Routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve Our Frontend
if (process.env.NODE_ENV === 'production') {
    // Setting our build folder for the static assets/files in our react frontend
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    // Load the index html file that is in our static build folder when all other routes callded
    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../frontend', 'build', 'index.html')
        )
    );
}else{
    app.get('/', (req, res) => res.send('Please set to a production environment first'));
}

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))