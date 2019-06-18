// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateRating {
  count: Int!
}

type AggregateScript {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createRating(data: RatingCreateInput!): Rating!
  updateRating(data: RatingUpdateInput!, where: RatingWhereUniqueInput!): Rating
  updateManyRatings(data: RatingUpdateManyMutationInput!, where: RatingWhereInput): BatchPayload!
  upsertRating(where: RatingWhereUniqueInput!, create: RatingCreateInput!, update: RatingUpdateInput!): Rating!
  deleteRating(where: RatingWhereUniqueInput!): Rating
  deleteManyRatings(where: RatingWhereInput): BatchPayload!
  createScript(data: ScriptCreateInput!): Script!
  updateScript(data: ScriptUpdateInput!, where: ScriptWhereUniqueInput!): Script
  updateManyScripts(data: ScriptUpdateManyMutationInput!, where: ScriptWhereInput): BatchPayload!
  upsertScript(where: ScriptWhereUniqueInput!, create: ScriptCreateInput!, update: ScriptUpdateInput!): Script!
  deleteScript(where: ScriptWhereUniqueInput!): Script
  deleteManyScripts(where: ScriptWhereInput): BatchPayload!
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
  rating(where: RatingWhereUniqueInput!): Rating
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating]!
  ratingsConnection(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RatingConnection!
  script(where: ScriptWhereUniqueInput!): Script
  scripts(where: ScriptWhereInput, orderBy: ScriptOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Script]!
  scriptsConnection(where: ScriptWhereInput, orderBy: ScriptOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScriptConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Rating {
  id: ID!
  value: Int!
  script: Script!
  user: User!
}

type RatingConnection {
  pageInfo: PageInfo!
  edges: [RatingEdge]!
  aggregate: AggregateRating!
}

input RatingCreateInput {
  id: ID
  value: Int!
  script: ScriptCreateOneWithoutRatingsInput!
  user: UserCreateOneInput!
}

input RatingCreateManyWithoutScriptInput {
  create: [RatingCreateWithoutScriptInput!]
  connect: [RatingWhereUniqueInput!]
}

input RatingCreateWithoutScriptInput {
  id: ID
  value: Int!
  user: UserCreateOneInput!
}

type RatingEdge {
  node: Rating!
  cursor: String!
}

enum RatingOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
}

type RatingPreviousValues {
  id: ID!
  value: Int!
}

input RatingScalarWhereInput {
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
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  AND: [RatingScalarWhereInput!]
  OR: [RatingScalarWhereInput!]
  NOT: [RatingScalarWhereInput!]
}

type RatingSubscriptionPayload {
  mutation: MutationType!
  node: Rating
  updatedFields: [String!]
  previousValues: RatingPreviousValues
}

input RatingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RatingWhereInput
  AND: [RatingSubscriptionWhereInput!]
  OR: [RatingSubscriptionWhereInput!]
  NOT: [RatingSubscriptionWhereInput!]
}

input RatingUpdateInput {
  value: Int
  script: ScriptUpdateOneRequiredWithoutRatingsInput
  user: UserUpdateOneRequiredInput
}

input RatingUpdateManyDataInput {
  value: Int
}

input RatingUpdateManyMutationInput {
  value: Int
}

input RatingUpdateManyWithoutScriptInput {
  create: [RatingCreateWithoutScriptInput!]
  delete: [RatingWhereUniqueInput!]
  connect: [RatingWhereUniqueInput!]
  set: [RatingWhereUniqueInput!]
  disconnect: [RatingWhereUniqueInput!]
  update: [RatingUpdateWithWhereUniqueWithoutScriptInput!]
  upsert: [RatingUpsertWithWhereUniqueWithoutScriptInput!]
  deleteMany: [RatingScalarWhereInput!]
  updateMany: [RatingUpdateManyWithWhereNestedInput!]
}

input RatingUpdateManyWithWhereNestedInput {
  where: RatingScalarWhereInput!
  data: RatingUpdateManyDataInput!
}

input RatingUpdateWithoutScriptDataInput {
  value: Int
  user: UserUpdateOneRequiredInput
}

input RatingUpdateWithWhereUniqueWithoutScriptInput {
  where: RatingWhereUniqueInput!
  data: RatingUpdateWithoutScriptDataInput!
}

input RatingUpsertWithWhereUniqueWithoutScriptInput {
  where: RatingWhereUniqueInput!
  update: RatingUpdateWithoutScriptDataInput!
  create: RatingCreateWithoutScriptInput!
}

input RatingWhereInput {
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
  value: Int
  value_not: Int
  value_in: [Int!]
  value_not_in: [Int!]
  value_lt: Int
  value_lte: Int
  value_gt: Int
  value_gte: Int
  script: ScriptWhereInput
  user: UserWhereInput
  AND: [RatingWhereInput!]
  OR: [RatingWhereInput!]
  NOT: [RatingWhereInput!]
}

input RatingWhereUniqueInput {
  id: ID
}

type Script {
  id: ID!
  name: String!
  description: String
  content: String!
  visibility: Visibility!
  tags: [String!]!
  ratings(where: RatingWhereInput, orderBy: RatingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rating!]
  author: User!
  favoritedBy(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ScriptConnection {
  pageInfo: PageInfo!
  edges: [ScriptEdge]!
  aggregate: AggregateScript!
}

input ScriptCreateInput {
  id: ID
  name: String!
  description: String
  content: String!
  visibility: Visibility
  tags: ScriptCreatetagsInput
  ratings: RatingCreateManyWithoutScriptInput
  author: UserCreateOneWithoutUserScriptsInput!
  favoritedBy: UserCreateManyWithoutFavoriteScriptsInput
}

input ScriptCreateManyWithoutAuthorInput {
  create: [ScriptCreateWithoutAuthorInput!]
  connect: [ScriptWhereUniqueInput!]
}

input ScriptCreateManyWithoutFavoritedByInput {
  create: [ScriptCreateWithoutFavoritedByInput!]
  connect: [ScriptWhereUniqueInput!]
}

input ScriptCreateOneWithoutRatingsInput {
  create: ScriptCreateWithoutRatingsInput
  connect: ScriptWhereUniqueInput
}

input ScriptCreatetagsInput {
  set: [String!]
}

input ScriptCreateWithoutAuthorInput {
  id: ID
  name: String!
  description: String
  content: String!
  visibility: Visibility
  tags: ScriptCreatetagsInput
  ratings: RatingCreateManyWithoutScriptInput
  favoritedBy: UserCreateManyWithoutFavoriteScriptsInput
}

input ScriptCreateWithoutFavoritedByInput {
  id: ID
  name: String!
  description: String
  content: String!
  visibility: Visibility
  tags: ScriptCreatetagsInput
  ratings: RatingCreateManyWithoutScriptInput
  author: UserCreateOneWithoutUserScriptsInput!
}

input ScriptCreateWithoutRatingsInput {
  id: ID
  name: String!
  description: String
  content: String!
  visibility: Visibility
  tags: ScriptCreatetagsInput
  author: UserCreateOneWithoutUserScriptsInput!
  favoritedBy: UserCreateManyWithoutFavoriteScriptsInput
}

type ScriptEdge {
  node: Script!
  cursor: String!
}

enum ScriptOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  content_ASC
  content_DESC
  visibility_ASC
  visibility_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ScriptPreviousValues {
  id: ID!
  name: String!
  description: String
  content: String!
  visibility: Visibility!
  tags: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ScriptScalarWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  visibility: Visibility
  visibility_not: Visibility
  visibility_in: [Visibility!]
  visibility_not_in: [Visibility!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ScriptScalarWhereInput!]
  OR: [ScriptScalarWhereInput!]
  NOT: [ScriptScalarWhereInput!]
}

type ScriptSubscriptionPayload {
  mutation: MutationType!
  node: Script
  updatedFields: [String!]
  previousValues: ScriptPreviousValues
}

input ScriptSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ScriptWhereInput
  AND: [ScriptSubscriptionWhereInput!]
  OR: [ScriptSubscriptionWhereInput!]
  NOT: [ScriptSubscriptionWhereInput!]
}

input ScriptUpdateInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
  ratings: RatingUpdateManyWithoutScriptInput
  author: UserUpdateOneRequiredWithoutUserScriptsInput
  favoritedBy: UserUpdateManyWithoutFavoriteScriptsInput
}

input ScriptUpdateManyDataInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
}

input ScriptUpdateManyMutationInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
}

input ScriptUpdateManyWithoutAuthorInput {
  create: [ScriptCreateWithoutAuthorInput!]
  delete: [ScriptWhereUniqueInput!]
  connect: [ScriptWhereUniqueInput!]
  set: [ScriptWhereUniqueInput!]
  disconnect: [ScriptWhereUniqueInput!]
  update: [ScriptUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [ScriptUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [ScriptScalarWhereInput!]
  updateMany: [ScriptUpdateManyWithWhereNestedInput!]
}

input ScriptUpdateManyWithoutFavoritedByInput {
  create: [ScriptCreateWithoutFavoritedByInput!]
  delete: [ScriptWhereUniqueInput!]
  connect: [ScriptWhereUniqueInput!]
  set: [ScriptWhereUniqueInput!]
  disconnect: [ScriptWhereUniqueInput!]
  update: [ScriptUpdateWithWhereUniqueWithoutFavoritedByInput!]
  upsert: [ScriptUpsertWithWhereUniqueWithoutFavoritedByInput!]
  deleteMany: [ScriptScalarWhereInput!]
  updateMany: [ScriptUpdateManyWithWhereNestedInput!]
}

input ScriptUpdateManyWithWhereNestedInput {
  where: ScriptScalarWhereInput!
  data: ScriptUpdateManyDataInput!
}

input ScriptUpdateOneRequiredWithoutRatingsInput {
  create: ScriptCreateWithoutRatingsInput
  update: ScriptUpdateWithoutRatingsDataInput
  upsert: ScriptUpsertWithoutRatingsInput
  connect: ScriptWhereUniqueInput
}

input ScriptUpdatetagsInput {
  set: [String!]
}

input ScriptUpdateWithoutAuthorDataInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
  ratings: RatingUpdateManyWithoutScriptInput
  favoritedBy: UserUpdateManyWithoutFavoriteScriptsInput
}

input ScriptUpdateWithoutFavoritedByDataInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
  ratings: RatingUpdateManyWithoutScriptInput
  author: UserUpdateOneRequiredWithoutUserScriptsInput
}

input ScriptUpdateWithoutRatingsDataInput {
  name: String
  description: String
  content: String
  visibility: Visibility
  tags: ScriptUpdatetagsInput
  author: UserUpdateOneRequiredWithoutUserScriptsInput
  favoritedBy: UserUpdateManyWithoutFavoriteScriptsInput
}

input ScriptUpdateWithWhereUniqueWithoutAuthorInput {
  where: ScriptWhereUniqueInput!
  data: ScriptUpdateWithoutAuthorDataInput!
}

input ScriptUpdateWithWhereUniqueWithoutFavoritedByInput {
  where: ScriptWhereUniqueInput!
  data: ScriptUpdateWithoutFavoritedByDataInput!
}

input ScriptUpsertWithoutRatingsInput {
  update: ScriptUpdateWithoutRatingsDataInput!
  create: ScriptCreateWithoutRatingsInput!
}

input ScriptUpsertWithWhereUniqueWithoutAuthorInput {
  where: ScriptWhereUniqueInput!
  update: ScriptUpdateWithoutAuthorDataInput!
  create: ScriptCreateWithoutAuthorInput!
}

input ScriptUpsertWithWhereUniqueWithoutFavoritedByInput {
  where: ScriptWhereUniqueInput!
  update: ScriptUpdateWithoutFavoritedByDataInput!
  create: ScriptCreateWithoutFavoritedByInput!
}

input ScriptWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  visibility: Visibility
  visibility_not: Visibility
  visibility_in: [Visibility!]
  visibility_not_in: [Visibility!]
  ratings_every: RatingWhereInput
  ratings_some: RatingWhereInput
  ratings_none: RatingWhereInput
  author: UserWhereInput
  favoritedBy_every: UserWhereInput
  favoritedBy_some: UserWhereInput
  favoritedBy_none: UserWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ScriptWhereInput!]
  OR: [ScriptWhereInput!]
  NOT: [ScriptWhereInput!]
}

input ScriptWhereUniqueInput {
  id: ID
}

type Subscription {
  rating(where: RatingSubscriptionWhereInput): RatingSubscriptionPayload
  script(where: ScriptSubscriptionWhereInput): ScriptSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  username: String!
  password: String!
  userScripts(where: ScriptWhereInput, orderBy: ScriptOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Script!]
  favoriteScripts(where: ScriptWhereInput, orderBy: ScriptOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Script!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  username: String!
  password: String!
  userScripts: ScriptCreateManyWithoutAuthorInput
  favoriteScripts: ScriptCreateManyWithoutFavoritedByInput
}

input UserCreateManyWithoutFavoriteScriptsInput {
  create: [UserCreateWithoutFavoriteScriptsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserScriptsInput {
  create: UserCreateWithoutUserScriptsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFavoriteScriptsInput {
  id: ID
  email: String!
  username: String!
  password: String!
  userScripts: ScriptCreateManyWithoutAuthorInput
}

input UserCreateWithoutUserScriptsInput {
  id: ID
  email: String!
  username: String!
  password: String!
  favoriteScripts: ScriptCreateManyWithoutFavoritedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String!
  password: String!
}

input UserScalarWhereInput {
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
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

input UserUpdateDataInput {
  email: String
  username: String
  password: String
  userScripts: ScriptUpdateManyWithoutAuthorInput
  favoriteScripts: ScriptUpdateManyWithoutFavoritedByInput
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  userScripts: ScriptUpdateManyWithoutAuthorInput
  favoriteScripts: ScriptUpdateManyWithoutFavoritedByInput
}

input UserUpdateManyDataInput {
  email: String
  username: String
  password: String
}

input UserUpdateManyMutationInput {
  email: String
  username: String
  password: String
}

input UserUpdateManyWithoutFavoriteScriptsInput {
  create: [UserCreateWithoutFavoriteScriptsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFavoriteScriptsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFavoriteScriptsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUserScriptsInput {
  create: UserCreateWithoutUserScriptsInput
  update: UserUpdateWithoutUserScriptsDataInput
  upsert: UserUpsertWithoutUserScriptsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFavoriteScriptsDataInput {
  email: String
  username: String
  password: String
  userScripts: ScriptUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutUserScriptsDataInput {
  email: String
  username: String
  password: String
  favoriteScripts: ScriptUpdateManyWithoutFavoritedByInput
}

input UserUpdateWithWhereUniqueWithoutFavoriteScriptsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFavoriteScriptsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutUserScriptsInput {
  update: UserUpdateWithoutUserScriptsDataInput!
  create: UserCreateWithoutUserScriptsInput!
}

input UserUpsertWithWhereUniqueWithoutFavoriteScriptsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFavoriteScriptsDataInput!
  create: UserCreateWithoutFavoriteScriptsInput!
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
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  userScripts_every: ScriptWhereInput
  userScripts_some: ScriptWhereInput
  userScripts_none: ScriptWhereInput
  favoriteScripts_every: ScriptWhereInput
  favoriteScripts_some: ScriptWhereInput
  favoriteScripts_none: ScriptWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}

enum Visibility {
  PUBLIC
  PRIVATE
}
`