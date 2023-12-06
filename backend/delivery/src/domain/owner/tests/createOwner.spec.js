import OwnersCNPJMissing from "../errors/cnpjsMissing.js"
import OwnersNameMissing from "../errors/namesMissing.js"
import createOwner from "../service/createOwner.js"

describe('Create owner', () => {
    it('Cannot possible create an user without a name', async () => {
        const owner = {
            prof_pic: null,
            cnpj: '27.418.574/0001-30'
        }
        await expect(() => createOwner(owner))
        .rejects
        .toThrow(OwnersNameMissing)
    })
    it('Cannot possible create an user without a CNPJ', async () => {
        const owner = {
            name: {
                first: 'Julio',
                last: 'César'
            },
            prof_pic: null,
        }
       await expect(createOwner(owner))
       .rejects
       .toThrow(OwnersCNPJMissing)
    })
})
