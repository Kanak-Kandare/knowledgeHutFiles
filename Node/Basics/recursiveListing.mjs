import fs from "fs";

async function recursiveListing(rootdir="./"){
    const path = await fs.promises.readdir(rootdir);
    for (let i = 0; i < path.length; i++) {
        const item = path[i];
        const stat = await fs.promises.stat(rootdir + "/" + item);
        if (stat.isDirectory()) {
            recursiveListing(rootdir + "/" + item);
        }
        else {
            console.log(rootdir+"/"+item);
        }
    }
}


export default recursiveListing