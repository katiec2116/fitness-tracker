const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Workout type is Required"
    },
    name: {
        type: String,
        trim: true,
        required: "Exercise name is Required"
      },
  
    duration: {
      type: Number,
      required: true
    },

    weight: {
        type: Number,
        required: true
      },

      reps: {
        type: Number,
        required: true
      },
      sets: {
        type: Number,
        required: true
      }
  });

  const Exercise = mongoose.model("Exercise", ExerciseSchema);
  
  module.exports = Exercise;