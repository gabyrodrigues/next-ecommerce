import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text"
        },
        password: {
          label: "password",
          type: "password"
        }
      },

      async authorize(credentials) {
        const response = await fetch("http://localhost:3333/login", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          })
        });

        const user = await response.json();

        if (user && response.ok) {
          return user;
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: "/sign-in"
  }
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
