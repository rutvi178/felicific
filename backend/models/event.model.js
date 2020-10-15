const mongoose = require('mongoose');
const { route } = require('../routes/event');
const router = require('../routes/event');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
eventname:{ type: String, required: true, unique: true, trim: true  },
time:{ type: String ,required:true,trim:true },
location:{type: String, required: true},
date:{type: Date , required: true},
contact_details:{type: String ,required : true ,trim:true },
description: {type: String , required: true ,trim: true},
amount :{type: Number ,required:true},
req_participant:{type: Number,required:true},
day:{type: Number,required:true},
},     {
   timestamps:true, 
});

const Event = mongoose .model('Event',eventSchema);
module.exports= Event;