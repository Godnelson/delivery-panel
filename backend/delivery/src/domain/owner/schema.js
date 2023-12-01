import { Schema } from "mongoose"

export class Owner {
    constructor(id, name, prof_pic) {
        this.id = id
        this.name = name
        this.prof_pic = prof_pic
    }
}

const OwnerSchema = new Schema({
    name: {first: String, last: String},
    prof_pic: String
})
