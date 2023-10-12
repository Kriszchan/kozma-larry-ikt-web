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
                document.getElementsByClassName('container_jobb')[0].style.position = "absolute";
                document.getElementsByClassName('container_bal')[0].style.position = "absolute";
                document.getElementsByClassName('container_jobb')[0].style.width = "50vw";
                document.getElementsByClassName('container_bal')[0].style.width = "50vw";
                document.getElementsByClassName('container_jobb')[0].style.width = "0";
                document.getElementsByClassName('container_bal')[0].style.width = "0";
                document.getElementsByClassName('container_jobb')[0].style.bottom = "0";
                document.getElementsByClassName('container_bal')[0].style.bottom = "0";
                document.getElementsByClassName('container_jobb')[0].style.left = "0";
                document.getElementsByClassName('container_bal')[0].style.right = "0";
                document.getElementsByClassName('container_jobb')[0].style.height = "100%";
                document.getElementsByClassName('container_bal')[0].style.height = "100%";
                document.body.style.overflow = "auto";

            }
            function reset()
            {
                document.getElementsByClassName('container_jobb')[0].style.position = "relative";
                document.getElementsByClassName('container_bal')[0].style.position = "relative";
                document.getElementsByClassName('container_jobb')[0].style.width = "100%";
                document.getElementsByClassName('container_bal')[0].style.width = "100%";
                document.getElementsByClassName('container_jobb')[0].style.bottom = "0";
                document.getElementsByClassName('container_bal')[0].style.bottom = "0";
                document.getElementsByClassName('container_jobb')[0].style.left = "0";
                document.getElementsByClassName('container_bal')[0].style.right = "0";
                document.getElementsByClassName('container_jobb')[0].style.height = "100%";
                document.getElementsByClassName('container_bal')[0].style.height = "100%";
                document.body.style.overflow = "hidden";
            }
