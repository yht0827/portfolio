
const commandCheck = (command) => {

    let result = [];

    if(command === "ls"){
        result = {
            command:command,
            result:[`Project    AboutMe    Terminal    Github    Email    Information`],
        };
    }else if(command === "pwd"){
        result = {
            command:command,
            result:[`/home/HT`],
        };
    }else if(command === "ls -l" || command === "ll"){
        result = {
            command:command,
            result:[`drwxr-xr-x 2 HT HT 4096 Jul 09:22 Project`,
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 AboutMe`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Information`],
        };
    }else if(command === "ls -al"){
        result = {
            command:command,
            result:[`drwxr-xr-x 2 HT HT 4096 May 19:50 .`,
                    `drwxr-xr-x 4 HT HT 4096 May 19:50 ..`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 09:22 Project`,
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 AboutMe`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Information`],
        };
    }else if(command === "date"){
        result = {
            command:command,
            result:[new Date().toGMTString()],
        };
    }else if(command === "whoami"){
        result = {
            command:command,
            result:["HT"],
        };   
    }else{
        result = {
            command:command,
            result:[`${command}: Command Not found`],
        };
    }

    return result;
};

export default commandCheck;
