const app = require('./app');

const { PORT } = process.env;

const connectDatabase = require('./config/database');

// Connecting to database
// connectDatabase();

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT:", PORT);
});