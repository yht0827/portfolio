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

export { folders, startmenu, Loginmenu };