import Polyclinic from "../models/polyclinicModel.js"

//create Polyclinic data

export const createPolyclinic = async (req,res) => {
    try {
        const polyclinic = await Polyclinic.create(req.body);
        res.status(201).json({ message: "Create Polyclinic Successfully  ", polyclinic});
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} 