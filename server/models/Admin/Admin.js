import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        maxlength: 20,
        minlength: 2,
    },
    email: {

        type: String,
        maxlength: 25,
        require: true,


    },
    password: {
        type: String,
        length: 25,
        require: true,


    },

    mobile: {
        type: String,
        require: true,
        maxlength: 10
    }

})

const adminModel = mongoose.model ("admins", adminsSchema, "admin");

export default adminModel;