
import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/prisma/index";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
