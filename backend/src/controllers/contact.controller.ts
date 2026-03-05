import { Request, Response } from "express";
import { z } from "zod";
import prisma from "../utils/prisma";

// Schema validation với Zod
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const submitContact = async (req: Request, res: Response) => {
  try {
    // 1. Validate data
    const validatedData = contactSchema.parse(req.body);

    // 2. Lưu vào DB
    const contact = await prisma.contact.create({
      data: {
        ...validatedData,
        ipAddress: req.ip || "unknown",
      },
    });

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, errors: error.issues });
    } else {
      console.error("Contact Error:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  }
};
