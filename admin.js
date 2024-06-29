// Import mongoose
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });
adminSchema.plugin(plm);
// Create the admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
