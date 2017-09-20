const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

var main_ctrl = require('./controllers/main_ctrl.js');


app.get('/name', main_ctrl.getName)
app.get('/location', main_ctrl.getLocation)
app.get('/occupations', main_ctrl.getOccupations)
app.get('/occupations/latest',main_ctrl.getOccupationsLatest);
app.get('/hobbies', main_ctrl.getHobbies);
app.get('/hobbies/:type', main_ctrl.getHobbiesByType);
app.get('/family', main_ctrl.getFamily);
app.get('/family/:relation', main_ctrl.getFamilyByRelation);
app.get('/restaurants', main_ctrl.getRestaurants);
app.get('/restaurants/:name', main_ctrl.getRestaurantsByName);
app.get('/restaurants/rating=op:value', main_ctrl.getRestaurantsByRating)


app.put('/name/:newName', main_ctrl.changeName);
app.put('/location/:newLocation', main_ctrl.changeLocation);

app.post('/hobbies', main_ctrl.newHobby);
app.post('/occupations', main_ctrl.newOccupation);
app.post('/family', main_ctrl.newFam);
app.post('/restaurants', main_ctrl.newRestaurant);




app.get('/skills', main_ctrl.getSkills);


app.post('/skills', main_ctrl.newSkill);



app.listen(port, () => {
  console.log(`Icecream: ${port}`)  ////will need to change the value here!!!!
});
