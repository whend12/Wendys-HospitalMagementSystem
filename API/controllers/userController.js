import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create Data User
export const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, gender, role } = req.body;

  if (!name || !email || !password || !confirmPassword || !gender || !role) {
    return res.status(400).json({ message: "Required fill all " });
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ message: "Password dan Confirm Password tidak sama!!" });
  }

  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      gender: gender,
      role: role,
    });

    res.status(201).json({ msg: "Create Account Successfully!" });
  } catch (error) {
    console.error("Gagal membuat akun:", error);
    res.status(500).json(error, { msg: "Create Account Failed!" });
  }
};

// Login

export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Email dan password diperlukan" });
  }
  try {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({ msg: "Email tidak ditemukan!" });
    }
    // Match the password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "Wrong Password!" });
    }
    // Generate access token
    const { id, name, gender, role } = user;
    const accessToken = jwt.sign(
      { userId: id, name, gender, role },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "50s",
      }
    );
    const refreshToken = jwt.sign(
      { userId: id, name, gender, role },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    // await RefreshTokens.create({ userId: id, token: refreshToken });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });

    return res.json({ accessToken });
  } catch (error) {
    console.error("Kesalahan saat login:", error);
    return res.status(500).json({ msg: "Terjadi kesalahan saat login" });
  }
};

// Edit Data User
