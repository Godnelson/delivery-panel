import Owner from "../schema"

export const findOwnerById = (id) => {
    try{
        return Owner.findById(id)
    }catch(e){
        console.error(e)
    }
}
