import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import User from "@/Models/User";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  await connectDb();
  try {
    const { name, email, password, contact, designation } = await req.json();
    console.log(name, email, password);
    if ((!email && !password && !name, !contact)) {
      return NextResponse.json({
        success: false,
        message: "Please enter the required details",
      });
    }
    const date = new Date();
    const time =
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      contact,
      designation,
      joining_date: time,
    });
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Data is entered successfully",
    });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
