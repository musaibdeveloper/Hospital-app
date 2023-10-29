import mongoose from "mongoose";

const patinetschema = new mongoose.Schema({

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
    Type: {
        type: String,
        length: 25,
        require: true,


    },

    mobile: {
        type: String,
        require: true,
        maxlength: 10
    },

    specialist: {
        type: String,
        require: true,
        maxlength: 25,

    },


})

const patinetModel = mongoose.model("pateint", patinetschema, "patient");

export default patinetModel;