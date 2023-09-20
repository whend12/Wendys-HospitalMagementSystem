import Patients from '../models/patientModel.js'


// Create Patient Data

export const createPatient = async (req,res) => {
    try {
        const patient = await Patients.create(req.body);
        res.status(201).json({message: "Patient data successfully created!", patient})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}
