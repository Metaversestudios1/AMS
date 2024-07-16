import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export const GET = async () => {
  await connectDb();
  try {

    const users = await User.find();
    if(!users) {

        return NextResponse.json({
          success: false,
          message:"There are no users in the database",
        });
    }
    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
