import express from "express";
import {
  GetPost,
  CreatePost,
  GetOne,
  Delete,
  Update,
} from "../controller/Posts.js";
const router = express.Router();

router.get("/", GetPost);

router.post("/", CreatePost);

router.get("/:id", GetOne);

router.delete("/:id", Delete);

router.patch("/:id", Update);

export default router;
