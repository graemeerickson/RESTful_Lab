const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// LAB CHALLENGE 1
const comedians = ['jim gaffigan','mike burbiglia'];
const videos = ['beyond the pale','sleepwalk with me'];

app.get('/videos', (request, response) => {
    response.send(videos);
});

app.get('/videos/:id', (request, response) => {
    let id = request.params.id;
    let video = videos[id - 1];
    response.send(video);
});

app.get('/comedians', (request, response) => {
    response.send(comedians);
});

app.get('/comedians/:id/videos', (request, response) => {
    response.send('videos by comedian');
});

app.get('/comedians/:id/videos/:id', (request, response) => {
    response.send('video by comedian');
});

// LAB CHALLENGE 2
const creamyPestoChicken = [
   {
      ingredientName: 'chicken',
      ingredientDept: 'poultry'
   },
   {
      ingredientName: 'pesto',
      ingredientDept: 'dairy'
   },
   {
      ingredientName: 'heavy whipping cream',
      ingredientDept: 'dairy'
   }
]

app.get('/creamyPestoChicken', (request, response) => {
    response.send(creamyPestoChicken);
});

app.get('/creamyPestoChicken/:id', (request, response) => {
    let id = request.params.id;
    let meal = creamyPestoChicken[id - 1];
    response.send(meal);
});

// LAB BONUS
var mealId;
var mealName;

app.post('/api/meals', function(request, response) {
    mealId = request.body.meal_id;
    mealName = request.body.name;

    response.send(mealId + ' ' + mealName);
});

app.get('/api/enchiladas', (request, response) => {
    response.send(`ID: ${mealId}; Name: ${mealName}`);
});

app.listen(3000, () => {
    console.log("I am listening");
});