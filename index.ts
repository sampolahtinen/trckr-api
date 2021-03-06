import { prisma } from './prisma/generated/prisma-client';
import { GraphQLServer } from 'graphql-yoga';

const resolvers = {
  Query: {
    users(root, args, context) {
      return context.prisma.users()
    },
    trackables(root, args, context) {
      return context.prisma.trackables()
    },
    trackable(root, args, context) {
      return context.prisma.trackable({ id: args.trackableId })
    },
    trackablesByUser(root, args, context) {
      return context.prisma.user({
        id: args.userId
      }).trackables()
    }
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
        name: args.name,
      })
    },
    createTrackable(root, args, context) {
      return context.prisma.createTrackable({
        name: args.name,
        userConnection: {
          connect: { id: args.userId }
        }
      })
    },
    async increaseOccurence(root, args, context) {
      const prevOccurence = await prisma.trackable({ id: args.trackableId })
      if (prevOccurence) {
        return context.prisma.updateTrackable({
          where: { id: args.trackableId },
          data: {
            occurence: prevOccurence.occurence + 1,
          }
        })
      }
      throw new Error("Trackable not found");
    },
    async decreaseOccurence(root, args, context) {
      const prevOccurence = await prisma.trackable({ id: args.trackableId })
      if (prevOccurence) {
        return context.prisma.updateTrackable({
          where: { id: args.trackableId },
          data: {
            occurence: prevOccurence.occurence - 1,
          }
        })
      }
      throw new Error("Trackable not found");
    },
  },
  User: {
    trackables(root, args, context) {
      return context.prisma.user({
        id: root.id
      }).trackables()
    }
  },
  Trackable: {
    userConnection(root, args, context) {
      return context.prisma.trackable({
        id: root.id
      }).userConnection()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'))