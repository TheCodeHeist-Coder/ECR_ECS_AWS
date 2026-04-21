import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Working Fine...!');
});

app.get('/cpu', (req, res) => {
    for (let i = 0; i < 1000000000; i++) {
        Math.random();
    }
    res.send("Helllo Raj!")
});



app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});