import { ownersNameMissing } from "../errors/namesMissing"
import Owner from "../schema"

export default async function createOwner(owner){
    try{
        if(owner.name == undefined){
            throw ownersNameMissing
        }
        return await Owner.create(owner)
    }catch(e){
        console.error(e)
    }
}
