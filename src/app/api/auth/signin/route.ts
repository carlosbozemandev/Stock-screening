import { NextApiRequest, NextApiResponse } from "next";
import { HttpApiError, HttpResponse } from "@/utils/HttpRespone";
import { Mongo } from "@/utils/mongo/";
import jwt from "jsonwebtoken";
import cookie   from "cookie";

const SECRET_KEY =
  "qwertyuiodoasjrfbheskfhdsxcvboiswueorghbfo3urbn23o9h9hjklzxcvbnms"; // Replace with your own secret key

interface User {
  id: string;
  fname: string;
  lname: string;
  email: string;
  username: string;
}

const handleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.query;
  const queryVal = {
    email: typeof email === "string" ? email.replace(/^"(.*)"$/, "$1") : "",
    password:
      typeof password === "string" ? password.replace(/^"(.*)"$/, "$1") : "",
  };

  try {
    const result = await Mongo.findOne({
      collection: "User",
      query: { email: queryVal.email, password: queryVal.password },
    });

    if (result) {
      // Set token payload
      const payload = {
        id: result.id,
        fname: result.fname,
        lname: result.lname,
        email: result.email,
        username: result.username,
        isAdmin: true,
      };

      // Generate JWT token
      const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: "1h",
      }); // Token expires in 1 hour

      // Save token in cookie
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          maxAge: 3600, // Token expires in 1 hour
          sameSite: "strict",
          path: "/", // Adjust path as needed
        })
      );

      res.status(200).json(HttpResponse({ token }));
    } else {
      throw new HttpApiError(401, "Invalid email or password");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetUserApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return handleLogin(req, res);
    default:
      throw new HttpApiError(400, `Not supported. Method: ${method}`);
  }
};

export default GetUserApi;
