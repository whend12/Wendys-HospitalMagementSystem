import mrDrugs from "../models/mrDrugsModel.js";

//get all Medical Record by id
export const getDrugsMedicalRecordById = async (req, res) => {
  try {
    const DrugsMedicalRecord = await mrDrugs.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(DrugsMedicalRecord[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
