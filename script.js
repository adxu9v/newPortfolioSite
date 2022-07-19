
    $('.mainText').animate({'opacity' : '1','margin-bottom' : '0px'},1000)
    let mouse = function(){
    $('.mouseWheel').animate({'top':'15px'},1000)
    $('.mouseWheel').animate({'top':'5px'},1000)}
    mouse()
   setInterval(function(){
    mouse()
   },2000)
