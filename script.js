var timer;

function iniciar(){
   timer=setInterval(timer,1000);
   document.getElementById('nome').innerHTML=("Começou...");
}

function parar(){
   timer=clearInterval(timer);
   document.getElementById('nome').innerHTML=("Parou...");
}


function timer(){
   let d=new Date();
   let h =d.getHours();
   let m=d.getMinutes();
   let s=d.getSeconds();

   let txt=h+':'+m+':'+s;
   document.querySelector('.nome').innerHTML=txt;
  
}