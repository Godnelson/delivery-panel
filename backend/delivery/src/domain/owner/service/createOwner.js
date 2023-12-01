import Owner from "../schema"

export const createOwner = (owner) => {
    try{
        return Owner.create(owner)
    }catch(e){
        console.error(e)
    }
}
