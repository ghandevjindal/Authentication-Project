const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For hashing passwords
const validator = require('validator'); // For validating email addresses

// Define the schema for the User
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      validate: {
        validator: (value) => validator.isEmail(value), // Validate email format
        message: 'Please enter a valid email address',
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Password must be at least 6 characters long
      validate: {
        validator: (value) => /^[a-zA-Z0-9]+$/.test(value), // Password must be alphanumeric
        message: 'Password must be alphanumeric',
      },
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

// Hash the password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    // Hash the password only if it has been modified
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
