
_clock()
setInterval(_clock, 1000)


function _clock(){
    let x = new Date()
    x.getSeconds()

    console.log(x)


    document.querySelectorAll('.wrapper span')[0].style.transform='translateX(-50%) rotate('+((x.getSeconds()*6))+'deg)'
    document.querySelectorAll('.wrapper span')[1].style.transform='translateX(-50%) rotate('+((x.getMinutes()*60)*.1)+'deg)'
    document.querySelectorAll('.wrapper span')[2].style.transform='translateX(-50%) rotate('+((x.getHours()*3600+1500)*.008)+'deg)'
    
    
}



