import express from "express";
import { createUser, getStudentUsers, getUser, getUserById } from "./user.controller";

const router = express.Router(); 

router.get("/", getUser)
router.get("/students",getStudentUsers)
router.post("/create-user", createUser)
router.get("/:id", getUserById)

export default router ;