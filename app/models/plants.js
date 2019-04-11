const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, { "collection": "plants", "timestamps": true });

module.exports = mongoose.model("Plant", PlantSchema);
