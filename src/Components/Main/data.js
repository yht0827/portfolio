const Dir = "Images/Icons/";
const folders = [
    {   
        "kr-name": "프로젝트",
        "en-name": "Projects",
        "image": Dir+"folder.png" 
    },
    {
        "kr-name": "내 정보",
        "en-name": "About Me",
        "image": Dir+"Me.png"
    },
    {
        "kr-name": "터미널",
        "en-name": "Terminal",
        "image": Dir+"terminal.png"
    }, 
    {
        "kr-name": "깃허브",
        "en-name": "Github",
        "image": Dir+"github.png"
    }, 
    {
        "kr-name": "이메일",
        "en-name": "Email",
        "image": Dir+"email.png"
    },
    {
        "kr-name": "정보",
        "en-name": "Information",
        "image": Dir+"information.png"
    },  
];

const startmenu = {
     "en" : {
        lang:"Korean",
        power:"PowerOff",
        langtext:"Change language"
     },
    "kr" : {
        lang:"영어",
        power:"종료",
        langtext:"언어 변경"
    },
}

const Loginmenu = {
    "en" : {
        name: "YHT",
        login: "Login",
        hello: "Hello!",
        langtext: "Click to Change language",
        time: ["AM","PM"],
        day: ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'],
        month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    "kr" : {
        name: "양희태",
        login: "로그인",
        hello: "안녕하세요!",
        langtext: "언어 변경",
        time: ["오전","오후"],
        day: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        month: ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]
    },
}

const infos = {
   "en": {
    title: "React.js Portfolio",
    developer: "Developer : ",
    name: "YHT",
    enddate: "Development end date : ",
    language: "Languages : React With hooks",
    source : "Source code : ",
    github : "Github",
    back : "back"
    },
    "kr":{
        title: "리액트 기반 포트폴리오",
        developer: "개발자 : ",
        name: "양희태",
        enddate: "개발 완료 일자 : ",
        language: "사용언어 : 리액트 & 리액트 hooks",
        source : "소스 코드 : ",
        github : "깃 허브",
        back : "뒤로 가기"
    },
};

const profiles = {
    "en" : {
        name : "YangHeeTae",
        birth : "Birthday 1992.08.27",
        motto : "Motto: Where there is a will there is a way",
        grade : "Education",
        uni : "Catholic University of Korea",
        major : "Major",
        majors: ["Information and Communications", "Computer Engineering"],
        certificate: "Certificate",
        certificates:["Engineer information security","Engineer Information Processing","SQLD","CSTS(AL)"],
    },
    "kr" : {
        name : "양희태",
        birth : "생년월일 1992.08.27",
        motto : "좌우명: 뜻이 있는 곳에 길이 있다.",
        grade : "학력",
        uni : "가톨릭대학교",
        major : "전공",
        majors: ["정보통신전자공학", "컴퓨터공학"],
        certificate: "자격증",
        certificates:["정보보안기사","정보처리기사","SQL개발자(SQLD)","SW 테스트 전문가(일반)"],
    },
};

const commandCheck = (command) => {

    let result = [];

    if(command === "ls"){
        result = {
            command:command,
            en:[`Project    AboutMe    Terminal    Github    Email    Information`],
            kr:[`프로젝트    내정보    터미널    깃허브    이메일    정보`],
        };
    }else if(command === "pwd"){
        result = {
            command:command,
            en:[`/home/HT`],
            kr:[`/home/희태`],
        };
    }else if(command === "ls -l" || command === "ll"){
        result = {
            command:command,
            en:[`drwxr-xr-x 2 HT HT 4096 Jul 09:22 Project`,
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 AboutMe`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Information`],
            kr:[`drwxr-xr-x 2 HT HT 4096 7월 09:22 프로젝트`,
            `drwxr-xr-x 2 HT HT 4096 9월 05:08 내정보`,
            "-rwxr-xr-x 1 HT HT   16 9월 07:17 터미널",
            `-rwxr-xr-x 1 HT HT  660 6월 08:44 깃허브`,
            `-rwxr-xr-x 1 HT HT  168 6월 15:35 이메일`,
            `drwxr-xr-x 2 HT HT 4096 7월 10:51 정보`],
        };
    }else if(command === "ls -al"){
        result = {
            command:command,
            en:[`drwxr-xr-x 2 HT HT 4096 May 19:50 .`,
                    `drwxr-xr-x 4 HT HT 4096 May 19:50 ..`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 09:22 Project`,
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 AboutMe`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Information`],
            kr:[`drwxr-xr-x 2 HT HT 4096 5월 19:50 .`,
            `drwxr-xr-x 4 HT HT 4096 5월 19:50 ..`,
            `drwxr-xr-x 2 HT HT 4096 7월 09:22 Project`,
            `drwxr-xr-x 2 HT HT 4096 9월 05:08 AboutMe`,
            "-rwxr-xr-x 1 HT HT   16 9월 07:17 Terminal",
            `-rwxr-xr-x 1 HT HT  660 6월 08:44 Github`,
            `-rwxr-xr-x 1 HT HT  168 6월 15:35 Email`,
            `drwxr-xr-x 2 HT HT 4096 7월 10:51 Information`],
        };
    }else if(command === "date"){
        result = {
            command:command,
            en:[new Date().toGMTString()],
            kr:[new Date().toLocaleString("ko-Kr")],
        };
    }else if(command === "whoami"){
        result = {
            command:command,
            en:["HT"],
            kr:["희태"],
        };   
    }else{
        result = {
            command:command,
            en:[`${command}: Command Not found`],
            kr:[`${command}: 명령을 찾을 수 없습니다`]
        };
    }

    return result;
};

const projects = {
    "en" : {
        "projects":[{
            title:"BitMiner",
            img:"Images/Mario.jpg",
            lang:"JavaScript",
            infotext:["Electron + Vue.js based game","Cross platform game!"],
            year:"2019",
            showpage:"https://www.google.com",
        }]
    },
    "kr" : {
        "projects":[{
            title:"비트채굴기",
            img:"Images/Mario.jpg",
            lang:"자바스크립트",
            infotext:["Electron + Vue.js 기반의 게임입니다","크로스 플랫폼 게임입니다!"],
            year:"2019",
            showpage:"https://www.google.com",
        }]
    },
};

export { folders, startmenu, Loginmenu, infos, profiles, projects, commandCheck };