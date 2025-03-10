import { Prisma } from "@prisma/client";

export type Post = Prisma.PostGetPayload<{}>

export type CreatePost = Prisma.PostUncheckedCreateInput

export class ErrorType extends Prisma.PrismaClientKnownRequestError {}

