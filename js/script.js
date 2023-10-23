function wchange(valtozando, wid)
            {
                document.getElementById(valtozando).style.width =  wid;
            }
function change(megjelen = '')
            {
                if(megjelen == 'kozma')
                {
                    document.getElementsByClassName('kozma')[0].style.display = "block";
                    document.getElementsByClassName('larry')[0].style.display = "none";
                }
                else
                {
                    document.getElementsByClassName('kozma')[0].style.display = "none";
                    document.getElementsByClassName('larry')[0].style.display = "block";
                }
                document.getElementsByClassName('box')[0].style.position = "absolute";
                document.getElementsByClassName('box')[1].style.position = "absolute";
                document.getElementsByClassName('box')[0].style.width = "0px";
                document.getElementsByClassName('box')[1].style.width = "0px";
                document.getElementsByClassName('box')[0].style.bottom = "0";
                document.getElementsByClassName('box')[1].style.bottom = "0";
                document.getElementsByClassName('box')[0].style.left = "0";
                document.getElementsByClassName('box')[1].style.right = "0";
                document.getElementsByClassName('box')[0].style.height = "100vh";
                document.getElementsByClassName('box')[1].style.height = "100vh";
                document.body.style.overflow = "auto";

            }
function reset()
{
                document.getElementsByClassName('box')[1].style.position = "relative";
                document.getElementsByClassName('box')[0].style.position = "relative";
                document.getElementsByClassName('box')[1].style.width = "50%";
                document.getElementsByClassName('box')[0].style.width = "50%";
                document.getElementsByClassName('box')[1].style.bottom = "0";
                document.getElementsByClassName('box')[0].style.bottom = "0";
                document.getElementsByClassName('box')[1].style.left = "0";
                document.getElementsByClassName('box')[0].style.right = "0";
                document.getElementsByClassName('box')[1].style.height = "100%";
                document.getElementsByClassName('box')[0].style.height = "100%";
                document.body.style.overflow = "hidden";
            }
