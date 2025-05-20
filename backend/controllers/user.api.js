import User from "../models/user.model.js";//importing User model from user.model.js for schema definition 


//Create User
export const createUser = async (req, res) => {
    try {
        const { name, email, password , confirmPassword } = req.body;//req.body contains all the data sent from the client
        
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


// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get one user by ID
export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const user = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
