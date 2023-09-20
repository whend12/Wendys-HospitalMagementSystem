import Doctors from "../models/doctorModel.js";

//Create Doctor
export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctors.create(req.body);
    res.status(201).json({ message: "Doctor data successfully", doctor });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all Doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Doctor by ID
export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctors.findById(req.params.id);
    res.status(200).json({ doctor });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Update Doctor
export const updateDoctor = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      speciality,
      address,
      experience,
      qualification,
      about,
    } = req.body;

    // Request validation - Check if any of the required fields are missing.
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "Name, email, and phone are required fields" });
    }

    const doctor = await Doctors.findById(id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Update doctor properties with the new values or keep the old ones if not provided.
    doctor.name = name || doctor.name;
    doctor.email = email || doctor.email;
    doctor.phone = phone || doctor.phone;
    doctor.speciality = speciality || doctor.speciality;
    doctor.address = address || doctor.address;
    doctor.experience = experience || doctor.experience;
    doctor.qualification = qualification || doctor.qualification;
    doctor.about = about || doctor.about;

    const updatedDoctor = await doctor.save();
    return res
      .status(200)
      .json({
        message: "Doctor data updated successfully",
        doctor: updatedDoctor,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Delete Doctor
export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctors.findById(req.params.id);
    if (doctor) {
      await doctor.remove();
      res.status(200).json({ message: "Doctor deleted successfully" });
    } else {
      res.status(404).json({ message: "Doctor not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get Doctor by Speciality
export const getDoctorBySpeciality = async (req, res) => {
  try {
    const doctors = await Doctors.find({ speciality: req.params.speciality });
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Doctor by Name
export const getDoctorByName = async (req, res) => {
  try {
    const doctors = await Doctors.find({ name: req.params.name });
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//Get Doctor by Experience
export const getDoctorByExperience = async (req, res) => {
  try {
    const doctors = await Doctors.find({ experience: req.params.experience });
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
