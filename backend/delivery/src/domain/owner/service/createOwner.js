import OwnersCNPJMissing from "../errors/cnpjsMissing"
import OwnersNameMissing, { ownersNameMissing } from "../errors/namesMissing"
import Owner from "../schema"

export default async function createOwner(owner) {

    if (owner.name == undefined) {
        throw OwnersNameMissing
    }
    if (owner.cnpj == undefined) {
        throw OwnersCNPJMissing
    }
    return await Owner.create(owner)

}
