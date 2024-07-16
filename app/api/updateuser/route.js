import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import User from "@/Models/User";

export const PUT = async (req) => {
  await connectDb();
  try {
    // const { name, email, password, contact, designation } = await req.json();
    const body = await req.json()
    const {emp_id} = body

    const user = await User.updateOne(
      { emp_id },
      { $set: body.oldData }
    );

    return NextResponse.json({
      success: true,
      message: "User is updated successfully",
    });
  } catch (err) {
    return NextResponse.json({ success: false, err: err });
  }
};
