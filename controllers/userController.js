const User = require("../models/userModel");

exports.createUser = async (req, res) => {
    try {
      const { username, department } = req.body;
      const newUser = new User({
        username: username,
        department: department
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: error.message });
    }
  };
  

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).send(user);
  } catch (error) {
  
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};
