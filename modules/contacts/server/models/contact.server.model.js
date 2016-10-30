'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
// var ContactSchema = new Schema({
//   name: {
//     type: String,
//     default: '',
//     required: 'Please fill Contact name',
//     trim: true
//   },
//   created: {
//     type: Date,
//     default: Date.now
//   },
//   user: {
//     type: Schema.ObjectId,
//     ref: 'User'
//   }
// });

var ContactSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  company: {
    type: String,
    default: '',
    trim: true
  },
  email: {
    type: String,
    default: '',
    trim: true
  },
  mobile: {
    type: String,
    default: '',
    required: 'Please fill Contact number',
    trim: true
  },
  address: {
    type: String,
    default: '',
    trim: true
  },
  group_name: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});


mongoose.model('Contact', ContactSchema);
