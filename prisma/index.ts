import type { PrismaClient, Prisma } from "@prisma/client";
import type { Adapter, AdapterAccount, AdapterUser } from "@auth/core/adapters";

/**
 * PrismaAdapter function that returns an Adapter object.
 * @param p - PrismaClient instance.
 * @returns Adapter object with various methods for interacting with the Prisma database.
 */

export function PrismaAdapter(p: PrismaClient): Adapter {
  return {
    createUser: (data) => {
      async function createUser() {
        const user = await p.user.create({ data });

        return user as AdapterUser;
      }

      return createUser();
    },

    getUser: (id) => {
      async function getUser() {
        const user = await p.user.findUnique({ where: { id } });

        return user as AdapterUser;
      }

      return getUser();
    },
    getUserByEmail: (email) => {
      async function getUserByEmail() {
        const user = await p.user.findUnique({ where: { email } });

        return user as AdapterUser;
      }

      return getUserByEmail();
    },
    async getUserByAccount(provider_providerAccountId) {
      const account = await p.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return account?.user as AdapterUser | null;
    },
    updateUser: ({ id, ...data }) => {
      async function updateUser() {
        const user = await p.user.update({ where: { id }, data });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (user.id) delete user.id;
        return user as AdapterUser;
      }

      return updateUser();
    },
    deleteUser: (id) => {
      async function deleteUser() {
        const user = await p.user.delete({ where: { id } });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (user.id) delete user.id;
        return user as AdapterUser;
      }

      return deleteUser();
    },

    linkAccount: (data) =>
      p.account.create({ data }) as unknown as AdapterAccount,

    unlinkAccount: (provider_providerAccountId) =>
      p.account.delete({
        where: { provider_providerAccountId },
      }) as unknown as AdapterAccount,

    async getSessionAndUser(sessionToken) {
      const userAndSession = await p.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      const { user, ...session } = userAndSession as any;
      return { user, session };
    },

    createSession: (data) => p.session.create({ data }),

    updateSession: (data) =>
      p.session.update({ where: { sessionToken: data.sessionToken }, data }),

    deleteSession: (sessionToken) =>
      p.session.delete({ where: { sessionToken } }),

    async createVerificationToken(data) {
      const verificationToken = await p.verificationToken.create({ data });
      // @ts-expect-errors // MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    },

    async useVerificationToken(identifier_token) {
      try {
        const verificationToken = await p.verificationToken.delete({
          where: { identifier_token },
        });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025")
          return null;
        throw error;
      }
    },
  };
}
