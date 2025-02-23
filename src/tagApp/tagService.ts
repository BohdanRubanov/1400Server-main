import tagRepository from "./tagRepository";
import {Tag} from "./types";
import { IError, ISuccess } from '../types/types'

async function getAllTags(): Promise< IError | ISuccess<Tag[]> > {
    const tags = await tagRepository.getAllTags();
    if (!tags){
        return {status: "error", message: "Tags Not Found"}
    }
    return {status: "success", data: tags}
}


const tagService = {
    getAllTags: getAllTags,
}
export default tagService