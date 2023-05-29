//sssdfgg
/*ffff
ffff
ffff
*/
//?var
//?class
//?function
//?run

console.log();
console.warn();
console.error();
console.time();
console.timeEnd();
console.clear();
let leagueOfLegends;

var v1;
v1 = 1;

let v2;//str
v2 = `Hi`;

const v3 = 1;

localStorage.setItem(`k1`,`Kkkkkk`);
localStorage.getItem(`k1`);
localStorage.removeItem(`k1`);

document.cookie = `c1=cccc;max-age=${1000*60*60*24*365*7};domain=;path=/;sameSite=Strict;`;
document.cookie = `c1=;max-age=0;`;

(v1)? 1:0;

if (v1){

} else if (v2){

} else{

}

switch (v1){
    case 1:
    case 2:
        break;
    case 3:
    default: 
}

try{}catch(error){}


while (v1 == `yes`){

}

do{

} while (v1 == `yes`);

for (let i = 0; i < 11; ++i){
    if (v1){
        continue;
        break;
    }
}

for (let i of v1){

}

for (let i in o){
    i;
    o[i];
}

let stopInterval;
stopInterval = setInterval(()=>{},1000*30);
clearInterval(stopInterval);

setTimeout(()=>{},1000);

let ss = ``;
let sa = [];
let so = {};
//data
typeof 1;
String();sa.join(``);JSON.stringify(so);Number();Boolean();ss.split(``);

//normal
    // String
        'ddddd\n' + ss + 'ddff\'',"",`ddddd
        ${ss}'""""'' \t`
        // +
        let str1 = `Hi`;
        let str2 = `Hey`;
        str1 = str1 + str2;
        str1 += str2 + 123;
        str1[1];
        btoa();  atob();
        str1.length;
        str1.replace(/ssss\$/g,``);
        str1.toUpperCase();
        str1.toLowerCase();
        str1.trim();
        str1[1];
        str1.slice(1,5);
        str1.includes(``);
        str1.startsWith(``);
        str1.endsWith(``);
        str1.indexOf(``);
        str1.lastIndexOf(``);
        str1.charCodeAt(); 
    // Number
        100,1.3
        // + - * / % ** ()
        let num = 3;
        num *= 3;
        parseInt();
        Math.PI;
        Math.abs();
        Math.sqrt();
        Math.max(1,2,3);
        Math.min();
        Math.random()*10;
        Math.round();
        Math.ceil();
        Math.floor();
        num.toFixed(3);
        num.toLocaleString(`en-US`);
    // Boolean
        true,false
        2 > 1
        false,0,"",undefined,null,NaN
        // >= <= == != === !==
        //&& || !
    // null
    // undefined
    // NaN
        isNaN();
//high
    // Array
        let a = [1,2,3,4,5,6,7];
        a;a[1];
        let a2 = new Array(3);
        a2[0] = 111;
        let a3 = Array.from(a);
        Array.isArray(a);
        a.length;
        a.unshift();a.push();a[1] += 1;a.splice(1,0, 1,2,3);a.copyWithin(1,6);
        a.shift();a.pop();a.splice(1,3);
        a.splice(1,1, 111);
        a.sort((a,b)=> a - b);
        a.sort((a,b)=>{
            newA = a.toLowerCase();
            newB = b.toLowerCase();

            if (newA > newB){
                return 1;
            } else if (newA < newB){
                return -1;
            } else{
                return 0;
            }
        });
        a.sort((a,b)=> a.localecompare(b));
        a.reverse();
        a.concat();
        a.slice(1,6);
        a.includes();
        a.indexOf();
        a.forEach((v,i,a)=>{
            v;
            a[i] = ``;
        });
        a.map((v,i,a)=>{
            return i;
        });
        a.filter((v,i,a)=> v != 0).map();
        a.find((v,i,a)=> v == 1);
    // Function
        function fun1(a,b,...q){
            let aa = ++a;
            return {
                aa,
                b,
                q,
            }; 
        }
        fun1(1,2,3,4,5).aa;
        fun1(()=>{});
        let fun2 = (e,b)=> e + b;
    // Object
        let o = {
            name: `www`,
            f(){
                this.name;
            },
            fun1,
        };
        o;o.name;o.f();o[`name`];
        o.age = 24;
        delete o.fun1;
        let {name} = o; 
    // class
        class Cla{
            name = `Hello`;

            constructor(a,b){
                this.f();
            }

            f(){
                this.name;
            }
        }

        let c1 = new Cla(1,2);
        c1.f();
        let c2 = new Cla();
        let c3 = new Cla();
    // Element

import {o,b,s} from `./header`;
b;
s();

document;
document.head;
document.title;
document.body;

document.embeds[1];
document.images;
document.links;
document.forms;

let q = document.links[0];
q.firstElementChild.lastElementChild.parentElement;

document.getElementById(``);
document.getElementsByClassName(``,``,``);
document.getElementsByTagName(`a`);

document.querySelector(`#s`);
document.querySelectorAll(``);

q.insertAdjacentElement(`afterbegin`,`<h1>Hi</h1>`);
q.append(a,s,d);
q.innerHTML += `<h1>Hi</h1>`;
let sound = document.createElement(`audio`);
sound.src = ``;
sound.play();

q.firstElementChild.remove();
q.removeAttribute(`title`);
document.write(``);

q.outerHTML = ``;
q.outerText = ``;
q.innerHTML += ``;
q.innerText += ``;
q.href = ``;
let inp = document.createElement(`input`);
inp.type = `text`;
inp.value = `Hi`;

q.style.color = `red`;
q.style.fontSize = `30px`;
q.setAttribute(`class`,`q b s`);
let qq = q.classList;
qq.contains(``);
qq.add(``,``,``);
qq.remove(``,``);
qq.replace(``,``);
qq.toggle(``);

screen.width;
screen.height;
navigator.onLine;
navigator.geolocation;
navigator.geolocation.getCurrentPosition();
let loca;
loca = navigator.geolocation.watchPosition(position=>{
    position.coords.longitude;
    position.coords.latitude;
    document.getElementById(`map1`).src = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&amp;layer=mapnik`;
},error=>{});
navigator.geolocation.clearWatch(loca);
navigator.userAgent.toLowerCase();

//viewport
window.outerWidth;
window.outerHeight;
window.innerWidth;
window.innerHeight
history.length;

location.href;
location.protocol;
location.hostname;
location.pathname;
q.scrollWidth;
q.scrollHeight;
q.scrollTop;
performance.now();
performance.mark(`start`).startTime;
performance.mark(`end`);
performance.measure(`time`,`start`,`end`);

q.nodeName.toLowerCase();
q.outerHTML;
q.innerHTML;
q.innerText;
q.textContent;
q.hasAttribute(``);
q.classList.contains(``);
q.href;
inp.value;
q.getBoundingClientRect().left;
q.clientWidth;
q.clientHeight;
q.clientLeft;
q.offsetWidth;
q.offsetHeight;
q.offsetTop;

let date = new Date();
date.getDay() + 1;
date.getDate();
date.getMonth() + 1;
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getUTCHours();
let date2 = new Date().toLocaleString(`en-US`,{timeZone: `America/New York`});
let date3 = new Date(date2);
date3.getHours();

sound.duration;
sound.currentTime = 100;
sound.volume = 50/100;//0.5
sound.playbackRate += 0.1;

sound.play();
sound.pause();
sound.load();

inp.focus();
inp.blur();
inp.setCustomValidity(``);
let form1 = document.forms[0];
form1.reset();
form1.submit();

q.click();

window.scrollTo(10,1000);
window.scrollBy(0,100);
history.go(-2);
location.assign(``);
location.replace(``);
window.open(``);

print();

location.reload();

window.stop();

window.close();

addEventListener(`offLine`);
addEventListener(`onLine`);

addEventListener(`scroll`);

addEventListener(`load`);
addEventListener(`beforeunload`,e=>"dddd");
addEventListener(`beforeprint`);
addEventListener(`afterprint`);

addEventListener(`paste`);

inp.addEventListener(`keyup`,e=>{
    e.key;
    e.code;
});

addEventListener(`click`,e=>{
    e.pageX;
    e.pageY;
    e.clientX;
    e.clientY;
});
addEventListener(`dblclick`);
addEventListener(`auxclick`);
addEventListener(`wheel`,e=>{
    if(e.deltaY > 0){

    } else{

    }
});
addEventListener(`mouseover`);
addEventListener(`mousemove`);
addEventListener(`mousedown`);
addEventListener(`mouseup`);
addEventListener(`mouseout`);
addEventListener(`pointerdown`);
addEventListener(`pointermove`);
addEventListener(`pointerup`);

sound.addEventListener(`play`);
sound.addEventListener(`pause`);
sound.addEventListener(`timeupdate`);
sound.addEventListener(`ended`);


inp.addEventListener(`focus`);
inp.addEventListener(`blur`);
inp.addEventListener(`select`);
inp.addEventListener(`change`);
inp.addEventListener(`input`);

form1.addEventListener(`reset`);
form1.addEventListener(`submit`,e=>{
    if(condition){
        return ;
    } else{
        e.preventDefault();
    }
});
inp.addEventListener(`invalid`);

let visible = new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
        if(e[0].intersectionRatio == 0.1){

        }
        e[0].target;
        document.getElementsByClassName(e[0].target.id);
    } else {

    }
},{root:none,rootMargin:`100px 0px 0px 0px`,threshold:[0.1,0.5,1]});

visible.observe(document.getElementById(``));
visible.unobserve(document.getElementById(``));
visible.disconnect();

function ooo(){

}
q.onclick = ooo();
inp.onclick = e=>{};
inp.onclick = false;
let sss = e=>{
    e.preventDefault();
    e.target;
};
sound.addEventListener(`dblclick`,sss,true);
sound.addEventListener(`click`,e=>{
    sound.removeEventListener(`dblclick`,sss,true);
},true);










