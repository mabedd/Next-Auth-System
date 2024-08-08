import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { User as NextAuthUser, DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends NextAuthUser {
    id: string;
    email: string;
    name?: string | null;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    name?: string | null;
    picture?: string | null;
  }
}

export interface NextAuthOptions {
  providers: any[];
  pages: {
    signIn: string;
    signOut: string;
    error: string;
    verifyRequest: string;
    newUser: string | null;
  };
  callbacks: {
    session: (session: Session, user: User) => Promise<Session>;
  };
  adapter: any;
}

export interface SessionWithUser extends DefaultSession {
  user: {
    id: string;
  } & DefaultSession["user"];
}

export interface User extends NextAuthUser {
  id: string;
}
