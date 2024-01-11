export type NoteData = {
    title:string,
    content:string,
    authorEmail:string
}

export type NoteBody = {
    id:string,
    title:string,
    content:string,
    authorEmail:string,
    createdAt:Date,
    updatedAt:Date | null,
}

export type Blog = {
    id?:string,
    title:string,
    content:string,
    createdAt:Date,
    updatedAt:Date,
    authorEmail:string,
    img:string | null,
    tagsIds:string[]
    author?:Object
    likes:number
}

export type Tag = {
    id:string,
    label:string,
}