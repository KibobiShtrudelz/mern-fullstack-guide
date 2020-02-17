const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  image: {
    type: String,
    required: true
  },
  places: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Place"
    }
  ]
});

// this 3rd party package makes the validation that the email is unique.
// the "unique" prop upthere is indexing the email for faster search, nothing more!
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
