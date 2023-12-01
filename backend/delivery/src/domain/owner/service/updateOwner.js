import Owner from "../schema"

export const updateOwner = (owner) => {
    try{
        return Owner.findOneAndUpdate({id: owner.id}, owner)
    }catch(e){
        console.error(e)
    }
}
