import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  // Generar un salt con 10 rondas de procesamiento
  const salt = await bcrypt.genSalt(10);

   // Hashear la contraseña con el salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { user, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { user, token };
};