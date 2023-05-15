import mongoose from "mongoose"

const LeadModel = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    textBox: {type: String}             
  }, {
    timestamps: true
});

const Lead = mongoose.model("Lead", LeadModel)

export{Lead} 