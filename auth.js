import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "@/services/auth-service";
import { getIsTokenValid } from "@/helpers/auth-helpers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const res = await login(credentials);
        if (!res.ok || !res.data) return null;

        const { token, ...user } = res.data;
        return { user, accessToken: token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (!getIsTokenValid(token?.accessToken)) return null;
      session.user = token.user;
      // Intentionally do not expose the access token to browser session data.
      return session;
    },
  },
  pages: { signIn: "/login" },
  trustHost: true,
});
