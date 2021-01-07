class volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file .volume=50/100;
        this.range = document.getElementById("range");
        this.range.addEventListener("change",()=>{
            this.audio_file.volume=range.value/100;
        });
        this.speed = document.getElementById("speed");
        this.audio_file.playbackRate=1;
        this.speed.addEventListener("change",()=>{
          
            
            this.audio_file.playbackRate = this.speed.value/100;
        });
    }
}
onload = new volume();