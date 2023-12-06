import Owner from "../schema"

export default async function findAllOwners(){
    try{
        return await Owner.find()
    }catch(e){
        console.error(e)
    }
}
