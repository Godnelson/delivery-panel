import Owner from "../schema"

export const deleteOwner = (owner) => {
    try{
        return Owner.findByIdAndDelete({id: owner.id}, owner)
    }catch(e){
        console.error(e)
    }
}
