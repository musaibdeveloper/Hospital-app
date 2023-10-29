import mongoose from "mongoose"

const nurseschema = new mongoose.Schema({

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

})
const nurseModel = mongoose.model("nurse", nurseschema, "nurse" )
export default nurseModel;