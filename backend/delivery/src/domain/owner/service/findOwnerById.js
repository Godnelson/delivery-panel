import Owner from "../schema"

export default async function findOwnerById(id){
    try{
        return await Owner.findById(id)
    }catch(e){
        console.error(e)
    }
}
