const { createPlant } = require('../actions');

const newPlant = (req, res) => {
	console.log('hola')
	createPlant(req.body).then(
		(plant) => res.status(201).json({ "message": "The new plant data has been saved"})
	).catch( (error) => {
    if (error.code === 11000) return res.status(409).json({message: 'Duplicate name'})
    return res.status(400).json(error)
  });
};
//
// const getPlants = async (req, res) => {
//   getAllPlants().then((plants) => {
//       res.status(200).json(plants);
//     }).catch((e) => {
//       res.status(400).json(e);
//     });
// };
//
//
// const getOnePlant = async (req, res) => {
//   getPlantByName(req.params.name)
//         .then((plant) => {
//           if (!plant) res.status(404).json({ "message": "Plant does not exist" });
//           res.status(200).json(plant);
//         }).catch( error => res.status(400).json(error))
// };
//
// const updatePlant = async (req, res) => {
//   updatePlantCapacity(req.params)
//         .then((plant) => {
//           if (!plant) res.status(404).json({ "message": "Plant does not exist" });
// 		      res.status(200).json(plant);
//         }).catch( error => res.status(400).json(error))
// };
//
// const deletePlant = async (req, res) => {
//   deletePlantbyName(req.params.name)
//         .then((plant) => {
//           if (!plant) res.status(404).json({ "message": "Plant does not exist" });
// 		      res.status(200).json(plant);
//         }).catch( error => res.status(400).json(error))
// };

module.export = {
  newPlant
  // getPlants,
  // getOnePlant,
  // updatePlant,
  // deletePlant
}
