const mongoose = require("mongoose");

const tandemSchema = new mongoose.Schema(
  {
    id: Number,
    tFirstName: String,
    tLastName: String,
    weight: Number,
    tInstructorName: String,

  },
  { timestamps: true }
);

const soloSchema = new mongoose.Schema(
  {
    id:Number,
    firstName: String,
    lastName: String,
    weight: Number,
    jumps: Number
  },
  { timestamps: true}
)

const Tandem = mongoose.model("Tandem", tandemSchema);
const Solo = mongoose.model("Solo", soloSchema);

module.exports = {Tandem, Solo};

