// use module
const fs = require('fs');
const path = require('path');
// logs directory
const dir = path.join(process.cwd(), 'Logs');

// function to remove files
const removeFiles = () => {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        // show files name
        console.log('Deleting the following log files:');
        files.forEach(file => {
            console.log(file);
            // remove file
            fs.unlinkSync(path.join(dir, file));
        });
        // remove directory
        fs.rmdirSync(dir);
        } else {
        console.log('Logs directory does not exist.');
    }
}
// call function
removeFiles()