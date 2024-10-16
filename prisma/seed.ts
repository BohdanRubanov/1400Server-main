import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


async function createPost(){
    const post = await prisma.post.create({
        data: {
            name: 'First post',
            author: 'Me',
            date: '16.10'
        }
    })
    console.log(post)
}
async function findPost(){
    const post = await prisma.post.findUnique({
        where: {
            id: 1
        }
    })
    console.log(post)
}
async function findPosts(){
    const post = await prisma.post.findMany({
        where: {
            id: {
                in: [1,2]
            }
        }
    })
    console.log(post)
}
async function createPosts(){
    const post = await prisma.post.createMany({
        data: [{
            name: 'First post',
            author: 'Me',
            date: '16.10',
        },
        {
            name: 'Second post',
            author: 'NotMe',
            date: '17.10'
        }]
    })
    console.log(post)
}

async function deletePost() {
    const post = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(post)
}

async function updatePost() {
    const post = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            name: 'Updated Post'
        }
    })
    console.log(post)

}



async function main() {
    await findPosts()

}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})