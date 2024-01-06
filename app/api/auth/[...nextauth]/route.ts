import NextAuth, { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions";




const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}


export const  getAuthSession =  () => getServerSession(authOptions)