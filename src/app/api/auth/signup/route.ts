import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/admin";

export async function POST(req: Request) {
  try {
    await dbConnect();
    console.log(req);
    
    // Attempt to parse JSON body
    let body;
    try {
      body = await req.json();
      console.log(body);
      
    } catch (error) {
      return NextResponse.json(
        { message: "Invalid or empty JSON body" },
        { status: 400 }
      );
    }

    const { fname, lname, email, password } = body;

    if (!fname || !lname || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      fname,
      lname,
      email,
      password,
      blocked: false,
      token: "",
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Named export for unsupported methods
export function OPTIONS() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
