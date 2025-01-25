const {User} = require('../models/index.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables
//    ping just for check
function pingUserController(req, res) {
    return res.json({message: 'user  controller is up'});
}



    // register  for user  
const registerController = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        
        const user = await User.create({
            name,
            email,
            password,
            role
        });
        return res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};



    // login   
const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if the password matches
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};


//   logout user 
const logoutController = (req, res) => {

    return res.status(200).json({ message: 'Logout successful' });
};






module.exports= {
    registerController ,
    pingUserController,
    loginController ,
    logoutController
}