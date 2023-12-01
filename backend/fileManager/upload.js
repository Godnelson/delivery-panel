import fs from "fs"
export const uploadFile = (buffer, filename) => {
    fs.writeFile("storage/"+filename, buffer, ()=>{
        console.log('file uploaded')
    })
}
