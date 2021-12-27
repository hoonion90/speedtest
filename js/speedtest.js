let $start;
let $ready;
let $click;
let $result;
let $caution;
let timer = 0;

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
    
}
