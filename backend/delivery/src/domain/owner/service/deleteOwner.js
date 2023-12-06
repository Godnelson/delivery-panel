import Owner from "../schema"

export default async function deleteOwner(owner){
    try{
        return await Owner.findByIdAndDelete({id: owner.id}, owner)
    }catch(e){
        console.error(e)
    }
}
