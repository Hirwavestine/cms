const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {},

  status: {
    type: string,
    default: "public"
  },
  allowComents: {
    type: Boolean,
    require: true
  },
  body: {
    type: string,
    require: true
  }
});
