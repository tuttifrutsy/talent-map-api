const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema(
  {
    name: String,
    resume: String,
    avatar: String,
    occupation: String,
    land: {
      type: String,
      enum: [
        "AgroLand",
       "CreativeLand" ,
        "IronLand",
        "GamerLand",
        "BlockchainLand",
        "DevLand",
        "BusinessLand",
        "TalentWoman",
        "TalentEducation"
      ],
      email: String,
      redes: {
        facebook: String,
        twitter: String,
        instragram: String,
        linkedin:String,
      },
      author: { type: Schema.Types.ObjectId, ref: "User" }
    }
  },
  {
    timestamps: true
  }
);

const Speaker = mongoose.model("Speaker", speakerSchema);
module.exports = Speaker;
