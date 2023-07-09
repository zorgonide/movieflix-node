import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";
export const createUser = async (req, res, next) => {
  let userData = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: await hashPassword(req.body.password),
    genres: "",
  };
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    const isValid = await comparePassword(req.body.password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = createJWT(user);
    return res.json({ token, role: user.role });
  } catch (err) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
};
export const updateUser = async (req, res, next) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: await hashPassword(req.body.password),
        genres: req.body.genres,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.body.id,
      },
    });
    if (!user) {
      createUser(req, res, next);
    } else res.status(200).json(user);
  } catch (err) {
    err.type = "input";
    next(err);
  }
};
