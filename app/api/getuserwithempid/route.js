import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export const POST = async (req) => {
  await connectDb();
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Please provide employee id",
      });
    }
    const user = await User.find({ emp_id : id});
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "There are no users in the database",
      });
    }
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
