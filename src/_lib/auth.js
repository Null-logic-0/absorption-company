import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createCustomer, getCustomers } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const exsistingCustomer = await getCustomers(user.email);

        if (!exsistingCustomer)
          await createCustomer({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },

    async session({ session }) {
      const customers = await getCustomers(session.user.email);
      session.user.customer = customers.id;

      return session;
    },
  },
  pages: {
    signIn: "/account/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
