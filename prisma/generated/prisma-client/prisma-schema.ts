export const typeDefs = /* GraphQL */ `type AggregateTrackable {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTrackable(data: TrackableCreateInput!): Trackable!
  updateTrackable(data: TrackableUpdateInput!, where: TrackableWhereUniqueInput!): Trackable
  updateManyTrackables(data: TrackableUpdateManyMutationInput!, where: TrackableWhereInput): BatchPayload!
  upsertTrackable(where: TrackableWhereUniqueInput!, create: TrackableCreateInput!, update: TrackableUpdateInput!): Trackable!
  deleteTrackable(where: TrackableWhereUniqueInput!): Trackable
  deleteManyTrackables(where: TrackableWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  trackable(where: TrackableWhereUniqueInput!): Trackable
  trackables(where: TrackableWhereInput, orderBy: TrackableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trackable]!
  trackablesConnection(where: TrackableWhereInput, orderBy: TrackableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrackableConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  trackable(where: TrackableSubscriptionWhereInput): TrackableSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Trackable {
  id: ID!
  name: String!
  occurence: Int
  userConnection: User
}

type TrackableConnection {
  pageInfo: PageInfo!
  edges: [TrackableEdge]!
  aggregate: AggregateTrackable!
}

input TrackableCreateInput {
  name: String!
  occurence: Int
  userConnection: UserCreateOneWithoutTrackablesInput
}

input TrackableCreateManyWithoutUserConnectionInput {
  create: [TrackableCreateWithoutUserConnectionInput!]
  connect: [TrackableWhereUniqueInput!]
}

input TrackableCreateWithoutUserConnectionInput {
  name: String!
  occurence: Int
}

type TrackableEdge {
  node: Trackable!
  cursor: String!
}

enum TrackableOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  occurence_ASC
  occurence_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TrackablePreviousValues {
  id: ID!
  name: String!
  occurence: Int
}

input TrackableScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  occurence: Int
  occurence_not: Int
  occurence_in: [Int!]
  occurence_not_in: [Int!]
  occurence_lt: Int
  occurence_lte: Int
  occurence_gt: Int
  occurence_gte: Int
  AND: [TrackableScalarWhereInput!]
  OR: [TrackableScalarWhereInput!]
  NOT: [TrackableScalarWhereInput!]
}

type TrackableSubscriptionPayload {
  mutation: MutationType!
  node: Trackable
  updatedFields: [String!]
  previousValues: TrackablePreviousValues
}

input TrackableSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TrackableWhereInput
  AND: [TrackableSubscriptionWhereInput!]
  OR: [TrackableSubscriptionWhereInput!]
  NOT: [TrackableSubscriptionWhereInput!]
}

input TrackableUpdateInput {
  name: String
  occurence: Int
  userConnection: UserUpdateOneWithoutTrackablesInput
}

input TrackableUpdateManyDataInput {
  name: String
  occurence: Int
}

input TrackableUpdateManyMutationInput {
  name: String
  occurence: Int
}

input TrackableUpdateManyWithoutUserConnectionInput {
  create: [TrackableCreateWithoutUserConnectionInput!]
  delete: [TrackableWhereUniqueInput!]
  connect: [TrackableWhereUniqueInput!]
  disconnect: [TrackableWhereUniqueInput!]
  update: [TrackableUpdateWithWhereUniqueWithoutUserConnectionInput!]
  upsert: [TrackableUpsertWithWhereUniqueWithoutUserConnectionInput!]
  deleteMany: [TrackableScalarWhereInput!]
  updateMany: [TrackableUpdateManyWithWhereNestedInput!]
}

input TrackableUpdateManyWithWhereNestedInput {
  where: TrackableScalarWhereInput!
  data: TrackableUpdateManyDataInput!
}

input TrackableUpdateWithoutUserConnectionDataInput {
  name: String
  occurence: Int
}

input TrackableUpdateWithWhereUniqueWithoutUserConnectionInput {
  where: TrackableWhereUniqueInput!
  data: TrackableUpdateWithoutUserConnectionDataInput!
}

input TrackableUpsertWithWhereUniqueWithoutUserConnectionInput {
  where: TrackableWhereUniqueInput!
  update: TrackableUpdateWithoutUserConnectionDataInput!
  create: TrackableCreateWithoutUserConnectionInput!
}

input TrackableWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  occurence: Int
  occurence_not: Int
  occurence_in: [Int!]
  occurence_not_in: [Int!]
  occurence_lt: Int
  occurence_lte: Int
  occurence_gt: Int
  occurence_gte: Int
  userConnection: UserWhereInput
  AND: [TrackableWhereInput!]
  OR: [TrackableWhereInput!]
  NOT: [TrackableWhereInput!]
}

input TrackableWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String
  trackables(where: TrackableWhereInput, orderBy: TrackableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trackable!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  trackables: TrackableCreateManyWithoutUserConnectionInput
}

input UserCreateOneWithoutTrackablesInput {
  create: UserCreateWithoutTrackablesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTrackablesInput {
  name: String!
  email: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  trackables: TrackableUpdateManyWithoutUserConnectionInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateOneWithoutTrackablesInput {
  create: UserCreateWithoutTrackablesInput
  update: UserUpdateWithoutTrackablesDataInput
  upsert: UserUpsertWithoutTrackablesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTrackablesDataInput {
  name: String
  email: String
}

input UserUpsertWithoutTrackablesInput {
  update: UserUpdateWithoutTrackablesDataInput!
  create: UserCreateWithoutTrackablesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  trackables_every: TrackableWhereInput
  trackables_some: TrackableWhereInput
  trackables_none: TrackableWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`