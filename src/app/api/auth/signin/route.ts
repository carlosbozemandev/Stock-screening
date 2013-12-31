import { NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import User from "@/models/admin";
import { NextResponse } from "next/server";

const SECRET_KEY =
  "qwertyuiodoasjrfbheskfhdsxcvboiswueorghbfo3urbn23o9h9hjklzxcvbnms"; // Replace with your own secret key

interface Users {
  id?: string;
  fname?: string;
  lname?: string;
  email?: string;
  username?: string;
}

export async function POST(req: Request, res: NextApiResponse) {
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

  const { email, password } = body;

  try {
    const result: Users | null = await User.findOne({ email, password });

    if (result) {
      // Set token payload
      const payload = {
        id: result.id,
        fname: result.fname,
        lname: result.lname,
        email: result.email,
        username: result.username,
        isAuthorized: true,
      };

      console.log(result);

      // Generate JWT token
      const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: "1h",
      }); // Token expires in 1 hour

      return NextResponse.json(
        { message: "User loggedIn successfully", data: token },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
