const Dir = "Images/Icons/";
const folders = [
    {   
        "kr-name": "프로젝트",
        "en-name": "Projects",
        "image": Dir+"folder.png" 
    },
    {
        "kr-name": "프로필",
        "en-name": "Profile",
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
        "kr-name": "브라우저",
        "en-name": "Browser",
        "image": Dir+"chrome.png"
    },
    {
        "kr-name": "오픈채팅",
        "en-name": "OpenChat",
        "image": Dir+"kakao.png"
    },
    {
        "kr-name": "이메일",
        "en-name": "Email",
        "image": Dir+"email.png"
    },
    {
        "kr-name": "블로그",
        "en-name": "Blog",
        "image": Dir+"blog.png"
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

const profiles = {
    "en" : {
        name : "YangHeeTae",
        birth : "Birthday 1992.08.27",
        motto : "I am interested in Programming.",
        grade : "Education",
        uni : "Catholic University of Korea",
        major : "Major",
        majors: ["Information and Communications", "Computer Engineering"],
        certificate: "Certificate",
        certificates:["Engineer information security","Engineer Information Processing","SQLD","CSTS(FL)","Computer Usage Literacy(1 Grade)"],
    },
    "kr" : {
        name : "양희태",
        birth : "생년월일 1992.08.27",
        motto : "개발에 관심을 가지고 공부하고 있습니다.",
        grade : "학력",
        uni : "가톨릭대학교",
        major : "전공",
        majors: ["정보통신전자공학", "컴퓨터공학"],
        certificate: "자격증",
        certificates:["정보보안기사","정보처리기사","SQL개발자(SQLD)","SW 테스트 전문가 일반(CSTS)","컴퓨터 활용능력(1급)"],
    },
};

const commandCheck = (command) => {

    let result = [];

    if(command === "ls"){
        result = {
            command:command,
            en:[`Project    Profile    Terminal    Github`,
            `Browser    OpenChat    Email    Blog`],
            kr:[`프로젝트    프로필    터미널    깃허브`,
            `브라우저    오픈채팅    이메일    블로그`],
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
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 Profile`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  631 Jul 18:42 Browser`,
                    `-rwxr-xr-x 1 HT HT  542 Aug 16:50 OpenChat`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Blog`],
            kr:[`drwxr-xr-x 2 HT HT 4096 7월 09:22 프로젝트`,
            `drwxr-xr-x 2 HT HT 4096 9월 05:08 프로필`,
            "-rwxr-xr-x 1 HT HT   16 9월 07:17 터미널",
            `-rwxr-xr-x 1 HT HT  660 6월 08:44 깃허브`,
            `-rwxr-xr-x 1 HT HT  631 7월 18:42 브라우저`,
            `-rwxr-xr-x 1 HT HT  542 8월 16:50 오픈채팅`,
            `-rwxr-xr-x 1 HT HT  168 6월 15:35 이메일`,
            `drwxr-xr-x 2 HT HT 4096 7월 10:51 블로그`],
        };
    }else if(command === "ls -al"){
        result = {
            command:command,
            en:[`drwxr-xr-x 2 HT HT 4096 May 19:50 .`,
                    `drwxr-xr-x 4 HT HT 4096 May 19:50 ..`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 09:22 Project`,
                    `drwxr-xr-x 2 HT HT 4096 Sep 05:08 Profile`,
                    "-rwxr-xr-x 1 HT HT   16 Sep 07:17 Terminal",
                    `-rwxr-xr-x 1 HT HT  660 Jun 08:44 Github`,
                    `-rwxr-xr-x 1 HT HT  631 Jul 18:42 Browser`,
                    `-rwxr-xr-x 1 HT HT  542 Aug 16:50 OpenChat`,
                    `-rwxr-xr-x 1 HT HT  168 Jun 15:35 Email`,
                    `drwxr-xr-x 2 HT HT 4096 Jul 10:51 Blog`],
            kr:[`drwxr-xr-x 2 HT HT 4096 5월 19:50 .`,
            `drwxr-xr-x 4 HT HT 4096 5월 19:50 ..`,
            `drwxr-xr-x 2 HT HT 4096 7월 09:22 프로젝트`,
            `drwxr-xr-x 2 HT HT 4096 9월 05:08 프로필`,
            "-rwxr-xr-x 1 HT HT   16 9월 07:17 터미널",
            `-rwxr-xr-x 1 HT HT  660 6월 08:44 깃허브`,
            `-rwxr-xr-x 1 HT HT  631 7월 18:42 브라우저`,
            `-rwxr-xr-x 1 HT HT  542 8월 16:50 오픈채팅`,
            `-rwxr-xr-x 1 HT HT  168 6월 15:35 이메일`,
            `drwxr-xr-x 2 HT HT 4096 7월 10:51 블로그`],
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
            title:"Java Pos System",
            img:"Images/projects/POS.png",
            lang:"Java Swing",
            infotext:["Login, Table, Menu, Sales","Understand to real POS system with Java"],
            year:"2018",
            showpage:"https://github.com/yht0827/projects/tree/master/JavaProject",
        },{
            title:"Train booking site",
            img:"Images/projects/HRT.png",
            lang:"Java, Jsp, Jquery, BootStrap(CSS), OracleDB",
            infotext:["JOIN, LOGIN, DESTINATION, BOOK, CANCEL, CHECK","Make Real Train Booking site with Java"],
            year:"2018",
            showpage:"https://github.com/yht0827/projects/tree/master/HRT_Proj",
        },{
            title:"Youtube site",
            img:"Images/projects/Youtube.png",
            lang:"Javascript(ES6), Pug(Jade), Node, Express, MongoDB",
            infotext:["Login, Join, Video Player,Video Record, Video Upload","Cloning Youtube Page with Javascript"],
            year:"2019",
            showpage:"https://github.com/yht0827/youtube-clone",
        },{
            title:"Certificate Management Platform",
            img:"Images/projects/Platform.png",
            lang:"HyperLedger, React(Recompose, Redux), Nodejs(Fabric Network)",
            infotext:["Using Private BlockChain HyperLedger for Certificate Management","Request Certificate Data When Special Status is Active"],
            year:"2019",
            showpage:"https://github.com/yht0827/JobSearchPlatform",
        }]
    },
    "kr" : {
        "projects":[{
            title:"자바 POS 정산 시스템",
            img:"Images/projects/POS.png",
            lang:"자바 스윙",
            infotext:["로그인, 테이블선택, 메뉴선택, 매출화면을 구현","실제 POS시스템 기능을 구현하고 JAVA의 전반적으로 이해"],
            year:"2018",
            showpage:"https://github.com/yht0827/projects/tree/master/JavaProject",
        },{
            title:"고속 열차 예매 사이트",
            img:"Images/projects/HRT.png",
            lang:"자바, JSP, 제이쿼리, 부트스트랩(CSS), 오라클DB",
            infotext:["회원가입, 로그인, 목적지 선택, 예약, 예약취소, 예약확인 등","실제 고속열차 예매 사이트를 기반으로 구현"],
            year:"2018",
            showpage:"https://github.com/yht0827/projects/tree/master/HRT_Proj",
        },{
            title:"유튜브 사이트",
            img:"Images/projects/Youtube.png",
            lang:"자바스크립트(ES6), 퍼그, 노드 ,익스프레스, 몽고DB",
            infotext:["로그인, 회원가입, 비디오 플레이어, 비디오 촬영, 업로드 등을 구현","실제 유튜브 사이트를 기반으로 구현"],
            year:"2019",
            showpage:"https://github.com/yht0827/youtube-clone",
        },{
            title:"블록체인 기반 자격증 관리 플랫폼",
            img:"Images/projects/Platform.png",
            lang:"하이퍼레저, 리액트(Recompose, Redux), 노드(패브릭 네트워크)",
            infotext:["하이퍼레저를 이용한 프라이빗 블록체인으로 이력관리 플랫폼을 제작","상황에 따라 블록체인에 배포한 자격증을 요청 할 수 있다."],
            year:"2019",
            showpage:"https://github.com/yht0827/JobSearchPlatform",
        }]
    },
};

const imgSrc = ["Icons/folder.png", "Icons/blog.png", "Icons/chrome.png", "Icons/email.png", "Icons/folder.png",
    "Icons/github.png", "Icons/information.png", "Icons/kakao.png", "Icons/Me.png", "Icons/terminal.png", "google.png",
    "poweroff.png", "react.png", "window.png", "projects/HRT.png", "projects/Platform.png", "projects/POS.png",
    "projects/Youtube.png"];

export { folders, startmenu, Loginmenu, profiles, projects, imgSrc, commandCheck };