let $start;
let $ready;
let $click;
let $result;
let $caution;
let timer;
let time = 0;
let count = 0;
let sumTime = 0;

window.onkeydown = (e) => {
    $start = $("#gameStart");
    $ready = $("#gameReady");
    $click = $("#gameClick");
    $result = $("#gameResult");
    $caution = $("#gameCaution");

    console.log(e.key);
    // if(e.key == "f" || e.key == "d"){
    //     console.log(e.key);
    // }
    if(e.key == "d" || e.key == "f" && $click.hasClass("active")){
        inActive($click);
        active($result);
        timerStop();
        console.log(time);
        time = 0;
    }
    if(e.key == "Enter" && $result.hasClass("active")){
        inActive($result);
        active($ready);
        setReady();
    }
    if(e.key =="Enter" && $start.hasClass("active")){
        inActive($start);
        active($ready);
        setReady();
    }
    if(e.key =="Enter" && $caution.hasClass("active")){
        inActive($caution);
        active($ready);
        setReady();
    }
};

function inActive(element){
    element.removeClass("active");
    element.addClass("inactive");
}
function active(element){
    element.removeClass("inactive");
    element.addClass("active");
}
function setReady(){
    let rand = getRandomArbitrary();
    console.log(rand);
    time = 0;
    setTimeout(()=>{
        inActive($ready);
        active($click);
        setClick();
    },rand * 500);
}
function setClick(){
    timerStart();
}
function getRandomArbitrary() {
    return Math.round(Math.random() * (12 - 3) + 3);
}

function timerStart(){
	timer = window.setInterval(clockRunning, 10);
}
function timerStop(){
	window.clearInterval(timer);
}
function clockRunning(){
    console.log(time);
    return time ++;
}