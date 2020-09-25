const express = require('express');


const app = express();

const users = ["katha", "shri", "bobo"];


app.get('/', (req, res) => {
    const fruit = {
        products: 'banana',
        prices: 10
    }
    res.send(fruit);
  });

  app.get('/fruit/mango', (req, res) => {
      res.send({fruit: 'mango'});
  });

  app.get('/users/:id', (req, res) => {
      const id = req.params.id;
      const name = users[id];
      res.send({id, name});
  })

  
  app.listen(3000, () => console.log('Listening to port 3000'));