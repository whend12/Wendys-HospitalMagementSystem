import Drugs from "../models/DrugsModel.js";

export const createDrug = async (req, res) => {
  try {
    const Drug = await Drugs.create(req.body);
    res.status(201).json({ message: "Create Drug Data Successfully", Drug });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
