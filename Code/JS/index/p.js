//********* P1
let p = document.getElementById(`p`);
let  mu1 = document.getElementById(`mu1`);
let rmu1 = document.getElementById(`rmu1`);
let play = false;

p.addEventListener(`click`,e=>{
    play = !play;
    if(play){
        mu1.play();
    }else{
        mu1.pause();
    }
});

mu1.addEventListener(`play`,e=>{
    rmu1.max = Number(mu1.duration);
});

mu1.addEventListener(`timeupdate`,e=>{
    rmu1.value = Number(mu1.currentTime);
});

rmu1.addEventListener(`input`,e=>{
    mu1.currentTime = Number(rmu1.value);
});



//*************** p2 */
class P2{
    d1 = document.getElementsByClassName(`d1`)[0];
    d2 = document.getElementsByClassName(`d2`)[0];

    constructor(){
        this.elementClick();
    }

    elementClick(){
        this.d2.addEventListener(`pointerdown`,e=>{
            this.elementMove_And_EndMove();
        });
    }

    elementMove_And_EndMove(){
        let elementMoveM = e=>{
            let pointerX = Number(e.pageX);
            let d1Left = Number(this.d1.getBoundingClientRect().left);
            let d1Right = Number(this.d1.getBoundingClientRect().right - 13);

            if( (pointerX >= d1Left) && (pointerX < d1Right)){
                this.d2.style.left = `${pointerX}px`;
            }
        }
        this.d1.addEventListener(`pointermove`,elementMoveM);

        let endMoveM = e=>{
            this.d2.removeEventListener(`pointerup`,endMoveM);
            this.d1.removeEventListener(`pointermove`,elementMoveM);    
        }
        this.d2.addEventListener(`pointerup`,endMoveM);

    }
}


let p2 = new P2();
