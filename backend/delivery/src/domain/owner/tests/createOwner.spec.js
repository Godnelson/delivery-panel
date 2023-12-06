import OwnersNameMissing from "../errors/namesMissing.js"
import createOwner from "../service/createOwner.js"

describe('Create owner', () => {
    it('Cannot possible create an user without name', ()=>{
        const owner = {
            prof_pic: null,
            document: '12345678'
        }
        createOwner(owner).catch(e => expect(e).equals(OwnersNameMissing))
    })
 })
