export const typeDefs = /* GraphQL */ `type AggregatePost {
  count: Int!
}

type AggregateTrackable {
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
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
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

type Post {
  id: ID!
  title: String!
  published: Boolean!
  author: User
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  published: Boolean
  author: UserCreateOneWithoutPostsInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  published: Boolean
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  published_ASC
  published_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  published: Boolean!
}

input PostScalarWhereInput {
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
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  title: String
  published: Boolean
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyDataInput {
  title: String
  published: Boolean
}

input PostUpdateManyMutationInput {
  title: String
  published: Boolean
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  published: Boolean
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
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
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  published: Boolean
  published_not: Boolean
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  trackable(where: TrackableWhereUniqueInput!): Trackable
  trackables(where: TrackableWhereInput, orderBy: TrackableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Trackable]!
  trackablesConnection(where: TrackableWhereInput, orderBy: TrackableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TrackableConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
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
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
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
  posts: PostCreateManyWithoutAuthorInput
  trackables: TrackableCreateManyWithoutUserConnectionInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTrackablesInput {
  create: UserCreateWithoutTrackablesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  name: String!
  email: String
  trackables: TrackableCreateManyWithoutUserConnectionInput
}

input UserCreateWithoutTrackablesInput {
  name: String!
  email: String
  posts: PostCreateManyWithoutAuthorInput
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
  posts: PostUpdateManyWithoutAuthorInput
  trackables: TrackableUpdateManyWithoutUserConnectionInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutTrackablesInput {
  create: UserCreateWithoutTrackablesInput
  update: UserUpdateWithoutTrackablesDataInput
  upsert: UserUpsertWithoutTrackablesInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPostsDataInput {
  name: String
  email: String
  trackables: TrackableUpdateManyWithoutUserConnectionInput
}

input UserUpdateWithoutTrackablesDataInput {
  name: String
  email: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
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
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
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