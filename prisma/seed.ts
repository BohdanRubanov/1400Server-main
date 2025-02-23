import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


// async function createPost(){
//     const post = await prisma.post.create({
//         data: {
//             name: 'Last post',
//             author: 'Me',
//             date: '20.10'
//         },
//         include: {
//             comments: true
//         }
//     })
//     console.log(post)
// }

// async function findPosts(){
//     const post = await prisma.post.findMany({
//         where: {
//             id: {
//                 in: [1,2]
//             }
//         }
//     })
//     console.log(post)
// }
// async function createPosts(){
//     const post = await prisma.post.createMany({
//         data: [{
//             name: 'First post',
//             author: 'Me',
//             date: '16.10',
//         },
//         {
//             name: 'Second post',
//             author: 'NotMe',
//             date: '17.10'
//         }]
//     })
//     console.log(post)
// }

// async function deletePost() {
//     const post = await prisma.post.delete({
//         where: {
//             id: 1
//         }
//     })
//     console.log(post)
// }

// async function updatePost() {
//     const post = await prisma.post.update({
//         where: {
//             id: 1
//         },
//         data: {
//             name: 'Updated Post'
//         }
//     })
//     console.log(post)

// }

// async function createComment(){
//     const comment = await prisma.comment.create({
//         data: {
//             title: 'Cool',
//             body: 'Not Cool',
//             img: 'No',
//             postId: 4
//         }
//     })
//     console.log(comment)
// }
// async function findComment(){
//     const comment = await prisma.comment.findUnique({
//         where: {
//             id: 1
//         }
//     })
//     console.log(comment)
// }
// async function findPostWithComments(){
//     const post = await prisma.post.findUnique({
//         where: {
//             id: 1
//         },
//         include: {
//             comments: true
//         }
//     })
//     console.log(post)
// }
// async function findCommentsWithPosts(){
//     const comment = await prisma.comment.findUnique({
//         where: {
//             id: 1
//         },
//         include: {
//             Post: true
//         }
//     })
//     console.log(comment)
// }
// async function findComments(){
//     const comment = await prisma.comment.findMany({
//         where: {
//             id: {
//                 in: [1,2]
//             }
//         }
//     })
//     console.log(comment)
// }

// async function deleteComment() {
    //     const comment = await prisma.comment.delete({
        //         where: {
            //             id: 1
            //         }
            //     })
            //     console.log(comment)
            // }
            
            // async function updateComment() {
                //     const comment = await prisma.comment.update({
                    //         where: {
                        //             id: 1
                        //         },
                        //         data: {
                            //             title: 'Ok'
                            //         }
                            //     })
                            //     console.log(comment)
                            
                            // }
async function createComments(){
    const comment = await prisma.comment.createMany({
        data: [{
            title: 'Cool',
            body: 'Not Cool',
            img: 'No',
            postId: 1
        },
        {
            title: 'Bad',
            body: 'Not Bad',
            img: 'Yes',
            postId: 1
        }]
    })
    console.log(comment)
}
async function createTags(){
    const tag = await prisma.tag.createMany({
        data: [{
            name: 'Cool',
        },
        {
            name: 'Bad',
        }]
    })
    console.log(tag)
}

// async function connectCommentsToPosts() {
//     const comments = await prisma.comment.updateMany({
//       where: {
//         id: 1, 
//       },
//       data: {
//         postId: 2, 
//       },
//     })
//     console.log(comments)
//   }

async function createPostWithCommentsAndTags() {
  const post = await prisma.post.create({
    data: {
      name: 'bebebe',
      author: 'bebebe',
      date: '25.10',
      tagId: 1
    },
    include: {
        comments: true,
      }
  })}

//   const comments = await prisma.comment.createMany({
//     data: [
//       {
//         title: 'First',
//         body: 'bebebe',
//         img: 'No',
//         postId: post.id, 
//       },
//       {
//         title: 'Second',
//         body: 'bebebe',
//         img: 'Yes',
//         postId: post.id, 
//       },
//     ],
//   })
//   const tags = await prisma.tag.createMany({
//     data: [
//       {
//         name: 'First',
//         postId: post.id, 
//       },
//       {
//         title: 'Second',
//         body: 'bebebe',
//         img: 'Yes',
//         postId: post.id, 
//       },
//     ],
//   })





// async function findPost(){
//     const post = await prisma.post.findUnique({
//         where: {
//             id: 50
//         }
//     })
//     console.log(post)
// }


async function main() {
    createTags(),
    createPostWithCommentsAndTags()

}

main().then(() => {
    prisma.$disconnect()
}).catch((err) => {
    console.log(err)
    prisma.$disconnect()
})