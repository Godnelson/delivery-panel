import Owner from "../schema"

export default async function updateOwner(owner){
    try{
        return await Owner.findOneAndUpdate({id: owner.id}, owner)
    }catch(e){
        console.error(e)
    }
}
