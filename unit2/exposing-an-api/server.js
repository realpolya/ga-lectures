import express from 'express';
const app = express();

app.use(express.json());

// calculator total
let total = 0;

/* In our response, we are utilizing 
shorthand syntax in JavaScript for object 
creation. This means when we write { total }, 
it is equivalent to { total: total }. 
The key total is automatically assigned 
the value of the total variable.
 */

app.get('/calculator', (req, res) => {
    // status ("I'm a teapot") + JSON object
    res.status(418).json({ total });
});

app.post("/calculator", (req, res) => {
    // extract number and operation from request
    const number = req.body.number;
    const operation = req.body.operation;

    // apply operation to total
    if (operation === 'add') {
        total += number;
    } else if (operation === 'subtract') {
        total -= number;
    } else if (operation === 'multiply') {
        total *= number;
    } else if (operation === 'divide') {
        total /= number;
    } else {
        return res.status(400).json({ error: 'Invalid operation' });
    }
      
    // send back the updated total
    res.status(200).json({ total })
});

app.delete("/calculator", (req, res) => {
    
    total = 0
    res.status(204).json({ total });

})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


