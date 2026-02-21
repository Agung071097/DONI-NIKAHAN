function openInvitation(){
document.getElementById("opening").style.display="none";
document.getElementById("navbar").style.display="flex";
document.getElementById("audioBtn").style.display="block";
document.querySelectorAll("section").forEach(sec=>sec.style.display="block");
document.getElementById("bgm").play();
animateHomeText();
startSakura();
startSparkle();
}

/* TEXT ANIMATION */
function animateHomeText(){
let texts=document.querySelectorAll(".fade-text");
texts.forEach((el,i)=>{
setTimeout(()=>el.classList.add("show"),i*500);
});
}

/* GOLD SWEEP */
window.addEventListener("scroll",()=>{
let sweep=document.getElementById("goldSweep");
sweep.classList.add("active");
setTimeout(()=>sweep.classList.remove("active"),1500);
});

/* SAKURA 3D */
function startSakura(){
setInterval(()=>{
let flower=document.createElement("div");
flower.className="sakura";
flower.innerHTML="🌸";
flower.style.left=Math.random()*100+"vw";
flower.style.fontSize=(14+Math.random()*10)+"px";
flower.style.animationDuration=(6+Math.random()*5)+"s";
document.body.appendChild(flower);
setTimeout(()=>flower.remove(),11000);
},800);
}

/* SPARKLE */
function startSparkle(){
setInterval(()=>{
let s=document.createElement("div");
s.className="sparkle";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
document.body.appendChild(s);
setTimeout(()=>s.remove(),2000);
},700);
}

/* SLIDESHOW */
let slides=document.querySelectorAll(".slide");
let index=0;
setInterval(()=>{
slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");
},3000);

/* COUNTDOWN */
let weddingDate=new Date("2026-12-20 09:00:00").getTime();
setInterval(()=>{
let now=new Date().getTime();
let d=Math.floor((weddingDate-now)/(1000*60*60*24));
document.getElementById("countdown").innerHTML=d+" Hari Lagi";
},1000);

/* AUDIO */
function toggleAudio(){
let audio=document.getElementById("bgm");
if(audio.paused){audio.play();}
else{audio.pause();}
}

/* RSVP */
document.getElementById("rsvpForm").addEventListener("submit",function(e){
e.preventDefault();
let nama=document.getElementById("nama").value;
let hadir=document.getElementById("kehadiran").value;
let waNumber="6281249076815";
let waMessage=`Halo, saya ${nama}. Konfirmasi kehadiran: ${hadir}`;
window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`);
document.getElementById("thanks").innerHTML="Terima kasih 💛";
});