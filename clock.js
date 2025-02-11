function showdate(){
    var body=document.getElementById("body")
    var date= new Date();
    body.style.backgroundImage="url(https://plus.unsplash.com/premium_photo-1661930618375-aafabc2bf3e7?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
    document.getElementById("dat").innerText=date;
    var h= date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    document.getElementById("h1").innerText = h+" Hours";
    document.getElementById("m1").innerText = min+" Minutes";
    document.getElementById("s1").innerText = sec+" Seconds";
    var area=document.getElementById("area")
    area.style.backgroundColor="rgba(255, 255, 255, 0.7)";
    area.style.width="450px";
    area.style.textAlign="center";
    area.style.margin="200px 0px 0px 450px";

}

setInterval(() => {
    console.log("set interval fun call");
    showdate();
},1000);
