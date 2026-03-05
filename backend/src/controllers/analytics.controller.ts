import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const recordView = async (req: Request, res: Response) => {
  const { path } = req.body;

  if (!path) {
    res.status(400).json({ error: "Path is required" });
    return;
  }

  try {
    // Upsert: Nếu có rồi thì tăng 1, chưa có thì tạo mới
    const analytics = await prisma.analytics.upsert({
      where: { path },
      update: { views: { increment: 1 } },
      create: { path, views: 1 },
    });

    res.json({ success: true, views: analytics.views });
  } catch (error) {
    console.error("Analytics Error:", error);
    res.status(500).json({ error: "Failed to record view" });
  }
};
