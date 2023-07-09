import { Router } from "express";
import { body } from "express-validator";
import { handleInputError } from "./modules/middlewares";
import { getMovie } from "./handlers/movieHandler";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "./handlers/commentHandler";
import {
  createRating,
  getRating,
  updateRating,
} from "./handlers/ratingHandler";
import {
  createWatchList,
  deleteWatchList,
  getWatchList,
} from "./handlers/watchlistHandler";

const router = Router();
// // Products
// router.get("/product", getProducts);
// router.get("/product/:id", getOneProduct);
// router.put(
//   "/product/:id",
//   body("name").isString(),
//   handleInputError,
//   updateProduct
// );
// router.post(
//   "/product",
//   body("name").notEmpty().trim().isString(),
//   handleInputError,
//   createProduct
// );
// router.delete("/product/:id", deleteProduct);
// // Update
// router.get("/update", getUpdates);
// router.get("/update/:id", getOneUpdate);
// router.put(
//   "/update/:id",
//   body("title").optional().trim(),
//   body("body").optional().trim(),
//   body("version").optional(),
//   body("asset").optional().trim().isURL(),
//   body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
//   handleInputError,
//   updateUpdate
// );

//Movies
router.post(
  "/movie/:id",
  body("title").exists().isString(),
  body("overview").exists().isString(),
  body("release_date").exists().isString(),
  body("vote_average").exists().isNumeric(),
  body("poster_path").exists().isString(),
  body("backdrop_path").exists().isString(),
  body("id").exists().isNumeric(),
  getMovie
);

// comments

router.get("/comment/:movieId", getComments);
router.post(
  "/comment/",
  body("movieId").exists(),
  body("comment").exists().isString(),
  body("userId").exists().isString(),
  createComment
);
router.put(
  "/comment/",
  body("comment").exists().isString(),
  body("id").exists().isString(),
  updateComment
);
router.delete("/comment/:id", deleteComment);

// Ratings
router.get("/rating/:movieId", getRating);
router.put("/rating/", updateRating);
router.post(
  "/rating/:movieId",
  body("userRating").exists().isNumeric(),
  createRating
);

// watchList

router.get("/watchlist/", getWatchList);
router.delete("/watchlist/:movieId", deleteWatchList);
router.post("/watchlist/:movieId", createWatchList);

router.use((err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ message: "Something went wrong in router handler" });
});
export default router;
