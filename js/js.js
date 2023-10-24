const list = ["div1", "div2", "div3", "div4", "div5"]

function Show(str) {
  list.forEach(element => {
    if(element == str){
      document.getElementById(element).style.display = "block";
    }
    else{
      document.getElementById(element).style.display = "none";
    }
  });
}