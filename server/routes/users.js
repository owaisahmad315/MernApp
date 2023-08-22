import express from "express";
import {
    getUser,
    getUserFriends,
    addRomoveFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();