import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";

export const {
    handlers:{GET,POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter:PrismaAdapter(prisma),
    callbacks:{},
    session:{strategy:'jwt'},
    ...authConfig
})