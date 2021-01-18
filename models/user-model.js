const mongoose = require("mongoose");


const addressSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: false,
  },
  street: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  country: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  postalcode: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },

}, {
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }
});
module.exports = mongoose.model("Address", addressSchema);



const personSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 150
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  email: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 200
  },
  birthDate: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  address: {
    type: addressSchema,
    required: true
  },

}, {
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 1000
  }
});

module.exports = mongoose.model("User", personSchema);
