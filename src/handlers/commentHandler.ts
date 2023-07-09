import prisma from "../db";

export const getComments = async (req, res, next) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        movieId: +req.params.movieId,
      },
    });
    res.status(200).json({ data: comments });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const comment = await prisma.comment.create({
      data: {
        movieId: +req.body.movieId,
        userId: req.user.id,
        comment: req.body.comment,
      },
    });
    res.status(200).json({ data: comment });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};

export const updateComment = async (req, res, next) => {
  try {
    const comment = await prisma.comment.update({
      where: {
        id_userId: { id: req.body.id, userId: req.user.id },
      },
      data: {
        comment: req.body.comment,
      },
    });
    res.status(200).json({ data: comment });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await prisma.comment.delete({
      where: {
        id_userId: { id: req.params.id, userId: req.user.id },
      },
    });
    res.status(200).json({ data: "deleted" });
  } catch (err) {
    err.type = "input";
    next(err);
  }
};
