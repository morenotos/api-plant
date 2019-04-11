const Plant = require('../models/plants');

const createPlant = (data) => {
  return Plant.create(data);
};

// const getAllPlants = () => {
//   return Plant.find({});
// };
//
// const getPlantByName = (name) => {
//   return Plant.findOne({ name: name });
// };
//
// const updatePlantCapacity = (name, capacity) => {
//   const query = { name }
//   const newCapacity = { capacity }
//   return Plant.findOneAndUpdate(query, {$set:{capacity: newCapacity}}, { new: true });
// };
//
// const deletePlantbyName = (name) => {
//   const query = { name }
//   return Plant.findOneAndUpdate(query, {$set:{is_active: false}}, { new: true });
// };

module.exports = {
  createPlant
  // getAllPlants,
  // getPlantByName,
  // updatePlantCapacity,
  // deletePlantbyName
};
