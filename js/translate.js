function setCookie(cookie_name, value, days) {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + days);
    // 설정 일수만큼 현재시간에 만료값으로 지정
  
    let cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
    document.cookie = cookie_name + '=' + cookie_value;
}

function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    while (x <= document.cookie.length) {
         var y = (x + nameOfCookie.length);
         if (document.cookie.substring(x, y) == nameOfCookie) {
              if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                   endOfCookie = document.cookie.length;
              return unescape(document.cookie.substring(y, endOfCookie));
         }
         x = document.cookie.indexOf(" ", x) + 1;
         if (x == 0)
              break;
    }
    return "";
}

function changeLang(element){
    if($(element).is(":checked")){
      setCookie("lang", "eng", 30);
      $('.eng_trans').show();
      $('.kor_trans').hide();
    }else{
      setCookie("lang", "kor", 30);
      $('.eng_trans').hide();
      $('.kor_trans').show();
    }
  }

  $(document).ready(()=>{
    let lang = getCookie("lang");
    if(lang == "eng"){
        $('.eng_trans').show();
        $('.kor_trans').hide();
        $('#translate').prop('checked', true);
    }else{
        $('.kor_trans').show();
        $('.eng_trans').hide();
    }
  });