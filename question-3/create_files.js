// use module
const fs = require('fs');
const path = require('path');

// logs directory
const dir = path.join(process.cwd(), 'Logs');

const createFils = () => {
    // check directory if it does not exist
    if (!fs.existsSync(dir)) {
        // Create directory 
        fs.mkdirSync(dir);
    }

    // Change to directory 
    process.chdir(dir);

    // Create 10 files
    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file${i}.`);
        // show file name
        console.log(`Created file: ${fileName}`);
    }
};

// call function 
createFils();
