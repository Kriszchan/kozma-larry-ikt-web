const box1 = document.getElementsByClassName('box')[0];
const box2 = document.getElementsByClassName('box')[1];
const elison = document.getElementsByClassName('larry')[0];
const laci = document.getElementsByClassName('kozma')[0];
const nagy = document.getElementsByClassName('large')[0];
const kozos = document.getElementsByClassName("kozos")[0];
const mobile = document.getElementsByClassName('mobile')[0];
function wchange(valtozando, wid)
            {
                document.getElementById(valtozando).style.width =  wid;
            }
async function change(megjelen = 'kozma', varido = 500)
            {
                slideDivsOut();
                if(megjelen == 'kozma')
                {
                    setTimeout(() => {
                        kozma();
                    }, varido);
                }
                else if(megjelen == 'larry')
                {  
                    setTimeout(() => {
                        larry();
                    }, varido);
                }
                setTimeout(() => {      
                    nagy.style.display = "none";
                    kozos.display = "block";
                    document.body.style.overflow = "auto";
                }, 500);
                
            }
function reset()
{   
                nagy.style.display = "block";
                kozos.display = "none";
                laci.style.display = "none";
                elison.style.display = "none";
                box1.style.transition = "0.5s ease-in-out";
                box2.style.transition = "0.5s ease-in-out";
                box1.style.transform = "translateX(0)";
                box2.style.transform = "translateX(0)";
            }
function xchange(megjelen, varido = 500)
            {
                    xslideDivsOut();
                    if(megjelen == 'kozma')
                    {
                        setTimeout(() => {
                            kozma();
                        }, varido);
                    }
                    else if(megjelen == 'larry')
                    {  
                        setTimeout(() => {
                            larry();
                        }, varido);
                    }
                    setTimeout(() => {      
                        mobile.style.display = "none";
                        kozos.display = "block";
                        document.body.style.overflow = "auto";
                    }, 500);
                    
            }
function kozma()
{
    laci.style.display = "block";
    elison.style.display = "none";
}
function larry()
{
    laci.style.display = "none";
    elison.style.display = "block";
}
function slideDivsOut() {
    box1.style.transform = "translateX(-100%)";
    box2.style.transform = "translateX(100%)";
    isSlidOut = true;
}
function xslideDivsOut() {
    box1.style.transform = "translateY(-100%)";
    box2.style.transform = "translateY(100%)";
    isSlidOut = true;
}