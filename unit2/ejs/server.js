import express from 'express';
const app = express();

app.get('/', (req, res) => {
  
    res.render('home.ejs', {
        msg: "hello there!",
        players: {
            name: "Polina",
            nameTwo: "King"
        },
        inventory: [
            { name: 'Candle', qty: 4 },
            { name: 'Cheese', qty: 10 },
            { name: 'Phone', qty: 1 },
            { name: 'Tent', qty: 0 },
            { name: 'Torch', qty: 5 }
        ],
    });
    
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
