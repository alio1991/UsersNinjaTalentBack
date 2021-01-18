const User = require("../models/user-model");
const jwt = require('jsonwebtoken')


const countries = [ 'ES', 'UK', 'DE', 'US' ];

// CREATE NEW USER
exports.post = (req, res) => {
  console.log(`Trying to create a new user: ${req.body['firstname']}`);
  const post = new User(req.body);
  post.save((err, result) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        error: err,
        id: req.body['_id']
      });
    } else {
      res.status(200).json({
        status: 200,
        post: result,
        msg: 'User was created'
      });
    }
  });
};


//-------------------------------------------------------------------------------------------


//GET
exports.get = (req, res) => {
  console.log('GET All');
  User.find((err, product) => {
    if (err) return err;
    res.send(product);
  })
};

// GET by email
exports.getOne = (req, res) => {
  console.log('GET ' + req.params.id);
  User.findById(req.params.id, function (err, product) {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }else{
      res.send(product);
    }
  })
};

// UPDATE
exports.put = (req, res) => {
  console.log('PUT ' + req.params.id);
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
    if (err) return err;
    res.send(product);
    return
  })
};

// DELETE
exports.delete = (req, res) => {
  console.log('DELETE ' + req.params.id);
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) return 'Errorrrr';
    res.send('Deleted user with id:' + req.params.id);
    return
  })
};

//GET
exports.getCountries = (req, res) => {
  console.log('GET Countries');
  res.send(countries);
};