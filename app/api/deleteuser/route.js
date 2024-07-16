

import connectDb from "@/connection/mongoose";
import { NextResponse } from "next/server";
import User from "@/Models/User";
export const DELETE = async (req) => {
  await connectDb();
  try {
    const {id} = await req.json()
    if (!id) {
      return NextResponse.json({ success: false, error: 'Name parameter is required' });
    }

    const del = await User.deleteOne({ emp_id: id });
    if (del.deletedCount === 0) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message });
  }
};
