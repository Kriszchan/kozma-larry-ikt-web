const box1 = document.getElementsByClassName('box')[0];
const box2 = document.getElementsByClassName('box')[1];
const elison = document.getElementsByClassName('larry')[0];
const laci = document.getElementsByClassName('kozma')[0];
function wchange(valtozando, wid)
            {
                document.getElementById(valtozando).style.width =  wid;
            }
async function change(megjelen = 'kozma', varido = 300)
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
                    box1.style.display = "none";
                    box2.style.display = "none";
                    document.body.style.overflow = "auto";
                }, 500);
                
            }
function reset()
{   
                slideDivsOut();
                box1.style.display = "block";
                box2.style.display = "block";
                document.body.style.overflow = "hidden";
                laci.style.display = "none";
                elison.style.display = "none";
                laci.style.opacity = "0";
                elison.style.opacity = "0";
                box1.style.transform = "translateX(0)";
                box2.style.transform = "translateX(0)";
            }
function kozma()
{
    laci.style.display = "block";
    elison.style.display = "none";
    laci.style.opacity = "1";
    elison.style.opacity = "1";
}
function larry()
{
    laci.style.display = "none";
    elison.style.display = "block";
    laci.style.opacity = "1";
    elison.style.opacity = "1";
}
function slideDivsOut() {
    box1.style.transform = "translateX(-100%)";
    box2.style.transform = "translateX(100%)";
    isSlidOut = true;
}