

var user = require('../user.js')
var skills = require('../skills.js')

module.exports = {

  getName(req, res, next){
    res.json({'name': user.name})
  },

  getLocation(req, res, next){
    res.json({'location': user.location})
  },

  getOccupations(req, res, next){
    if( req.query.order){
      if( req.query.order ===  'asc'){
        res.json(user.occupations.sort())
      }
      if ( req.query.order === 'desc'){
        res.json(user.occupations.sort().reverse())
      }

      }
      else {
          res.json({'occupations': user.occupations})
      }
    },




  getOccupationsLatest(req, res, next){
    res.json({'latestOccupation': user.occupations.slice(-1)})
  },

  getHobbies(req, res, next){
    res.json({'hobbies': user.hobbies})
  },

  getHobbiesByType(req, res, next){
    if (user.params.type) {
      res.json(user.hobbies.filter( x => x.type === req.params.type))
      }
      else {
        res.json("Error")
      }

  },

  getFamily(req, res, next){
    res.json({'family': user.family})
  },

  getFamilyByRelation(req, res, next){
     if (user.params.relation) {
       res.json(user.family.filter( x => x.relation === req.params.relation))
     }
     else {
       res.json("Error")
     }
   },

   getRestaurants(req, res, next){
     res.json({'restaurants': user.restaurants})
   },

   getRestaurantsByName(req, res, next){
      if(user.params.name) {
        res.json(user.restaurants.filter( x => x.name === req.params.name))
      }
      else {
        res.json("Error")
      }
    },

    getRestaurantsByRating(req, res, next){
      if(req.params.value){
      res.json(user.restaurants.filter( x => x.rating >= req.params.value))
    }
    else {
      res.json({ restaurants: user.restaurants })
    }
  },

changeName( req, res, next){
  if(req.params.newName){
    user.name = req.params.newName;
    res.json(user)
  }
  else{
    res.json('Error');
  }
},

changeLocation (req, res, next) {
  if(req.params.newLocation){
    user.location = req.params.newLocation;
    res.json(user)
  }
  else{
    res.json('Error');
  }
},


newHobby ( req, res, next){
  user.hobbies.push(req.body);
    res.json(user)

},

newOccupation (req, res, next){
  user.occupations.push(req.body.occupation);
  res.json(user)
},

newFam (req, res, next){
  user.family.push(req.body);
  res.json(user)
},

newRestaurant (req, res, next){
  user.restaurants.push(req.body);
  res.json(user)
},

getSkills (req, res, next){
  if(req.query.experience){
      res.json(skills.skills.filter( x => x.experience == req.query.experience));
  }

},

newSkill (req, res, next){
  skills.skills.push({
    name: req.body.name,
    experience: req.body.experience,
    id: skills.skills.length+1})
  res.json(skills.skills);
},



















};
