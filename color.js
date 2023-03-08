var Links = {
  setColor: function(color){
    // var alist = document.querySelectorAll('a'); // 반복문 사용
    // var i =0;
    // while(i<alist.length) {
    // alist[i].style.color = color;
    // i++;
    // }
    $('a').css('color',color);
  }
}
var Body = {
  setColor:function (color) {
    // ﻿document.querySelector('body').style.color = color;
    $('body').css('color',color); // jquery를 이용하여 작성.
  },
  setbackgroundColor:function (color){
    //﻿document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function nightdayhandler(self) {  //함수 사용
  var target = ﻿document.querySelector('body');
  if (self.value === 'night')  {
    Body.setbackgroundColor('black');
    Body.setColor('white');
    self.value ='day'

    Links.setColor('white');
  } else {
    Body.setbackgroundColor('white');
    Body.setColor('black');
    self.value ='night'

    Links.setColor('blue');
}
}
