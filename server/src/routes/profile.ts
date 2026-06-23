import { Router, type Request, type Response } from "express";
import { error } from "node:console";
import { prisma } from "../lib/prisma";
export const profileRouter = Router();

profileRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { userId, ...profileData } = req.body;
    if (!userId) {
      return res.status(400).json({
        Error: "User ID is required",
      });
    }
    const {
      goal,
      experience,
      daysPerWeek,
      sessionLength,
      equipment,
      injuries,
      preferredSplit,
    } = profileData;

    if (
      !goal ||
      !experience ||
      !daysPerWeek ||
      !sessionLength ||
      !equipment ||
      !preferredSplit
    ) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }
    // await prisma.user_profiles.upsert(where:{user_id:userId},update:{})
  } catch (err) {
    console.error("Error saving profile: ", error);
    res.status(500).json({
      error: "Failed to save profile",
    });
  }
});
