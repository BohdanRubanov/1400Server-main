// Здесь вся логика работы с данными 

type Post = {
    id: number;
    name: string;
    author: string;
    date: string;
  };


const posts: Post[] = [{id: 1, name: 'Post1', author: "Author1", date: "23.09"}, 
            {id: 2, name: 'Post2', author: "Author2", date: "24.09"}, 
            {id: 3, name: 'Post3', author: "Author3", date: "25.09"}]



function getAllPosts(){
    
    const context = {
        posts: posts
    }
    
    return context
}

function getPostById(id: number){
    const context = {
        post: posts[id-1]
    }
    
    return {
        context: context,
        length: posts.length
    }

}

function createPost(data: Post){
    posts.push(data)
}

const service_funcs = {
    getAllPosts: getAllPosts,
    getPostById: getPostById,
    createPost: createPost
} 

export default service_funcs