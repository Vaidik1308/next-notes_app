
import { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
export default {
    providers:[
        Google({
          clientSecret:process.env.GOOGLE_SECRET,
          clientId:process.env.GOOGLE_ID
        }),
        GitHub({
          clientId:process.env.GITHUB_CLIENT_ID,
          clientSecret:process.env.GITHUB_CLIENT_SECRET
        }),
    ]
} satisfies NextAuthConfig