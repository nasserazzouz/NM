
class player {
    constructor(){
var hightMain =document.getElementById("player");
hightMain.style.height = screen.height+"px";
if(screen.width<650){
    hightMain.style.width = screen.width+"px";
}
var heightDiv=document.getElementById("content");
heightDiv.style.height= screen.width-300+"px";
    }
}
onload = new player();
class Audio_Player{
    constructor (){
    this.audio_file = document.getElementById("audio_file");
    this.titel_file= document.getElementById("titel_file");
    this.stop= document.getElementById("stop");
    this.isPlaye;
    this.stop.addEventListener("click",()=>{
    this.play_pause();
    });
    this.name_audio=[];
    this.name_audio[0]="RADIO ALGERYA";
    this.name_audio[1]="RADIO MAROCO";
    this.name_audio[2]="RADIO QOURAN";

    this.source_audio=[];
    this.source_audio[0]="https://ch1.ice.infomaniak.ch/ch1-32.aac";
    this.source_audio[1]="http://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3";
    this.source_audio[2]="http://quraan.us:9786/;";
    this.server = 0;  
    this.setResource();  
    document.getElementById("next").addEventListener("click",()=>{
if( this.server< this.source_audio.length-1){
    ++this.server;
   
    this.isPlaye = false;
}else{
    this.server=0;
}
localStorage.setItem("sava",this.server);
this.setResource();  

    });
    document.getElementById("back").addEventListener("click",()=>{
        if( this.server>0){
            --this.server;
          
            this.isPlaye = false;
        }else{
            this.server=this.source_audio.length-1;
        }  
        localStorage.setItem("sava",this.server); 
        this.setResource(); 
       
    });
}
setResource(){
   if(localStorage.getItem("sava")!=null){
    this.server=localStorage.getItem("sava");
   } 
    this.audio_file .src = this.source_audio[this.server];
    this.titel_file.innerHTML=this.name_audio[this.server];
    this.play_pause();
}
    play_pause(){
        if(this.isPlaye == false){
            this.stop.src ="./img/th.jpg";
            this.audio_file.play();
            this.isPlaye = true;
    
        }else{
            this.stop.src ="./img/s.jpg";
            this.audio_file.pause();
            this.isPlaye = false;
        }
    }
    }
    onload = new Audio_Player();