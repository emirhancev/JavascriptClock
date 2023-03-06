function GetName(){
    let isimtutucu= prompt("Adınız Nedir ?")
    let name = document.querySelector("#myName")
    name.innerHTML=isimtutucu
}


function Time(){
    var now = new Date()
    var hour=now.getHours()
    var minute=now.getMinutes()
    var second=now.getSeconds()
    var day = now.getDay()

    let gunTutucu= day==0 ? "Pazar" : day==1 ? "Pazartesi" : day==2 ? "Salı" :
    day==3 ? "Çarşamba" : day==4 ? "Perşembe" : day==5 ? "Cuma" : "Cumartesi"

    let clock = document.getElementById("myClock")
    clock.innerHTML=`${hour}:${minute}:${second} ${gunTutucu}`
}

GetName()
setInterval(Time,1000)




