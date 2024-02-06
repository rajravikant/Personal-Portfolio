import art1 from "../images/Screen.png"
import art2 from "../images/project2.png"
import art3 from "../images/headphones.jpg"
import ht from "../images/html-5.png";
import css from "../images/css-3.png";
import js from "../images/js.png";
import rc from "../images/reactjs.png";
import cs from '../images/c-sharp.png';
import xm from '../images/xml.png';
import nt from '../images/net.png';
import wn from '../images/windows.png';

let data = [
    {
        id:1,
        title : "MyHealth Stats" ,
        art : art1,
        description : "MyHealthStats is an engaging and informative fitness website designed to empower individuals on their journey to a healthier and more active lifestyle.Dedicated to provide valuable resources, expert advice,and a supportive community to help users achieve their fitness goals.",
        skills : [ht,css,js,rc],
        repo : "https://github.com/rajravikant/myhealthstats.github.io",
        website : "https://myhealthstats.in/"
        
    },
    {
        id : 2,
        title : "AVI Studio" ,
        art : art2,
        description : "Media Player includes full support for browsing, managing, and watching our local video collection too. All the content in the music and video folders on our PC will appear automatically in our library. ",
        skills:[cs,xm,nt,wn],
        repo : "https://github.com/rajravikant/WPF-Media-Management-Desktop-Application/tree/main/AVI%20Studio",
        website : "https://myhealthstats.in/"
        
    },
    {
        id: 3,
        title : "Clip2Tune" ,
        art : art3,
        description : "Youtube to audio converter web based application developed is reactjs",
        skills : [ht,css,js,rc],
        repo : "https://github.com/rajravikant/clip2tune",
        website : "https://myhealthstats.in/"
    },
    
]

export default data;