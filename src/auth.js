import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import $axios from "@/lib/Axios";

async function login(credentials) {
  try {
    return await $axios
      .post("http://102.210.244.222:6508/authentication/login", credentials)
      .then((res) => {
        const user = res.data;
        return user;
      });
  } catch (e) {
    throw new Error("Something went wrong.");
  }
}

const config = {
  pages: { signIn: "/" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userId: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          return login(credentials);
        } catch (e) {
          return {};
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

const { handlers, auth, signIn, signOut } = NextAuth(config);

export { handlers, auth, signIn, signOut };
export default NextAuth(config);
