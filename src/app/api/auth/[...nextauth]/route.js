import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Validate input
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        const { email, password } = credentials;

        try {
          // Connect to the database
          await connectMongoDB();
          const user = await User.findOne({ email });

          // Check if the user exists
          if (!user) {
            throw new Error("Invalid email or password");
          }

          // Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            throw new Error("Invalid email or password");
          }

          // Return user object if authentication is successful
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error("Error during authentication:", error);
          throw new Error("Internal server error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JSON Web Token for sessions
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // Custom sign-in page
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };