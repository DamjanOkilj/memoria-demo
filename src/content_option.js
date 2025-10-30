import pic1 from './images/429818521_1066850141070282_1820545193560174397_n.jpg'
import logo from './images/393723126_265525282621770_6300794443983875043_n.jpg'
import memoria from './images/MEMORIA.jpg'
import dragon from './images/dragon.jpg'
import mart from './images/mart.jpg'
import februar from './images/februar.jpg'
import urban from './images/urban.jpg'
import mjau from './images/mjau.jpg'
import viking from './images/viking.jpg'
import kult from './images/kult.jpg'
import zena from './images/zena.jpg'

const logotext = "MEMORIA PARANTAR";
const meta = {
    title: "MEMORIA PARANTAR",
    description: "",
};

const introdata = {
    title: "MEMORIA PARANTAR",
    animated: {
        first: "Beelden die blijven",
        second: "",
        third: "",
    },
    description: "",
    your_img_url: memoria,
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: pic1,
        description: "Ulaznice za svirke CRNI BOMBARDER",
        link: "#",
    },
    {
        img: dragon,
        description: "Personalizovana rođendanska čestitka",
        link: "#",
    },
    {
        img: mart,
        description: "",
        link: "#",
    },
    {
        img: februar,
        description: "",
        link: "#",
    },
    {
        img: urban,
        description: "",
        link: "#",
    },
    {
        img: mjau,
        description: "mau",
        link: "#",
    },

    {
        img: viking,
        description: "Dizajn za tetovažu",
        link: "#",
    },
    {
        img: kult,
        description: "",
        link: "#",
    },
    {
        img: zena,
        description: "",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "memoria.parantar@gmail.com",
    YOUR_FONE: "+32492871793",
    description: "",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    instagram: "https://www.instagram.com",
    github: "https://github.com",
    facebook: "https://www.facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};