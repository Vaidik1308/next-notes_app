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