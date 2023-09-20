import medicalRecords from "../models/MedicalrecordModel.js";

//get all Medical Record by id
export const getMedicalRecordById = async (req, res) => {
  try {
    const MedicalRecord = await medicalRecords.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(MedicalRecord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
