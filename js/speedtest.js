let $start;
let $ready;
let $click;
let $result;
let $caution;
let $count;
let timer;
let timer2;
let time = 0;
let count = 0;
let sumTime = 0;
let startTime;

window.onkeydown = (e) => {
    $start = $("#gameStart");
    $ready = $("#gameReady");
    $click = $("#gameClick");
    $result = $("#gameResult");
    $caution = $("#gameCaution");
    $count = $("#count");
    // console.log(e.key);
    // if(e.key == "f" || e.key == "d"){
    //     console.log(e.key);
    // }
    if((e.key == "d" || e.key == "f" || e.key == "D" || e.key == "F") && $click.hasClass("active")){
        inActive($click);
        active($result);
        timerStop();
        // console.log(time);
        $count.text(time);
        if(count <= 5) {
            sumTime += time;
            count ++;
        }
        if(count == 5){
            // console.log(Math.round(sumTime / 5));
            $("#testResult").val( Math.round(sumTime / 5) );
            setTimeout(()=>{document.mainx.submit();},1000);
        }
    }
    else if( (e.key == "d" || e.key == "f" || e.key == "D" || e.key == "F") && $ready.hasClass("active")){
        inActive($ready);
        active($caution);
        window.clearTimeout(timer2);
        timerStop();
        time = 0;
    }
    else if(e.key == "Enter" && $result.hasClass("active")){
        inActive($result);
        active($ready);
        setReady();
        time = 0;
    }
    else if(e.key =="Enter" && $start.hasClass("active")){
        inActive($start);
        active($ready);
        setReady();
        time = 0;
    }
    else if(e.key =="Enter" && $caution.hasClass("active")){
        inActive($caution);
        active($ready);
        setReady();
        time = 0;
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
    // console.log(rand);
    time = 0;
    timer2 = setTimeout(()=>{
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
	clockRunning();
}
function timerStop(){
	window.clearInterval(timer);
}
function clockRunning(){
    startTime = Date.now();
    timer = setInterval(function() {
        let elapsedTime = Date.now() - startTime;
        // time = (elapsedTime / 1000).toFixed(3);
        time = elapsedTime;
    }, 1);
}