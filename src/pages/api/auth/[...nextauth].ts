import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        fullname: { label: "Fullname", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, fullname, email, password } = credentials as {
          username: string;
          fullname: string;
          email: string;
          password: string;
        };
        const user: any = {
          id: 1,
          username: username,
          fullname: fullname,
          email: email,
          password: password,
        };
        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.username = user.username;
      }

      return token;
    },
    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("username" in token) {
        session.user.username = token.username;
      }
      console.log(session, token);
      return session;
    },
  },
};

export default NextAuth(authOptions);
