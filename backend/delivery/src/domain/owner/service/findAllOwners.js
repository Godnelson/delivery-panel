import Owner from "../schema"

export const findAllOwners = () => {
    try{
        return Owner.find()
    }catch(e){
        console.error(e)
    }
}
