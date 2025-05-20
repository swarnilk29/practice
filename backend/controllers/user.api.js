import User from "../models/user.model";//importing User model from user.model.js for schema definition 


//Create User
export const createUser = async (req, res) => {
    try {
        const { name, email, password , confirmpassword } = req.body;//req.body contains all the data sent from the client
        
   // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const user = new User({ name, email, password, confirmPassword });
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



