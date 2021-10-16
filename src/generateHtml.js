const fs = require('fs');

const writeFile = (data) => {
    return new Promise((resolve, reject) => {
fs.writeFile('./dist/index.html', data, err => {

    if(err){
        console.log(err);
        return;
    }
    resolve({
        ok: true,
        message: "Your file has been generated!"
    })
})
    })
}
module.exports = writeFile;