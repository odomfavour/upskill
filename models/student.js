import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  track: {
    type: String,
    required: [true, 'Track is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  education: {
    type: String,
    required: [true, 'Highest education level is required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyTokenExpiry: Date,
  // Other fields and validation as needed
});

const Student =
  mongoose.models.students || mongoose.model('students', studentSchema);

export default Student;
