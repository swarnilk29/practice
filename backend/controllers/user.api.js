import User from "../models/user.model";//importing User model from user.model.js for schema definition 


//Create User
export const createUser = async (req, res) => {
    try {
        const { name, email, password , confirmpassword } = req.body;
        
    }
    catch(error){
        res.status(500).json({error: error.message});

    }
}
