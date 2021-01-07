class Color{
    constructor(){
this.color1 = document.getElementById("button1");
this.color1.addEventListener("click",()=>{
    this.select_color("color1");
});

    this.color2 = document.getElementById("button2");
    this.color2.addEventListener("click",()=>{
        this.select_color("color2");
    });
 
        this.color3 = document.getElementById("button3");
        this.color3.addEventListener("click",()=>{
            this.select_color("color3");
        });
 
  this.color4 = document.getElementById("button4");
   this.color4.addEventListener("click",()=>{
   this.select_color("color4");
            });
            if(localStorage.getItem("COLOR")==null){
                document.body.style.background="linear-gradient(to right,red,blue)";
            }
            this.select_color(localStorage.getItem("COLOR"));
        }            
select_color(color){
if(color=="color1"){
document.body.style.background="red";
}
else if(color=="color2"){
    document.body.style.background="linear-gradient(to right,red,blue)";
 
    }
    else if(color=="color3"){
        document.body.style.background="blue";
        }
        else if(color=="color4"){
            document.body.style.background="green";
            }
            localStorage.setItem("COLOR",color);
}
   
}
onload = new Color();