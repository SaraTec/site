function next(){ 
    var selecteder = document.getElementsByClassName("selected");
    //var selected = document.getElementById("item1");
    //var x = selected.nextSibling;
    var selected = selecteder[0];
    var  prev= selected.previousElementSibling;
    var next = selected.nextElementSibling;
    
    if(prev!=null){
    var nextSecond = next.nextElementSibling;
    var prevSecond = prev.previousElementSibling;
    prev.classList.remove("prev");
    prev.classList.add('prevLeftSecond');
    next.classList.remove("next");
    next.classList.add('selected');
    selected.classList.remove("selected");
    selected.classList.add('prev');
    document.getElementById("next").style.visibility = "hidden"
    }
    else{
    var nextSecond = next.nextElementSibling;
    nextSecond.classList.remove("nextRightSecond");
    nextSecond.classList.add('next');
    next.classList.remove("next");
    next.classList.add('selected');
    selected.classList.remove("selected");
    selected.classList.add('prev');
    document.getElementById("prev").style.visibility = "visible";
    }
}
var cheked = 0;
function drop()
{
    if(cheked==0){
    var selecteder = document.getElementsByClassName("drop-box");
    var selected = selecteder[0];
    selected.style.visibility = "visible";
    var categoty = document.getElementById("categoty");
    categoty.innerHTML = "Category ▲";
    cheked = 1;
}
else{
    var selecteder = document.getElementsByClassName("drop-box");
    var selected = selecteder[0];
    selected.style.visibility = "hidden";
    cheked = 0;
    var categoty = document.getElementById("categoty");
    categoty.innerHTML = "Category ▼";
}
}
function prev(){
    var selecteder = document.getElementsByClassName("selected");
    //var selected = document.getElementById("item1");
    //var x = selected.nextSibling;
    var selected = selecteder[0];
    var  prev= selected.previousElementSibling;
    var next = selected.nextElementSibling;
    if(next!=null){
    var nextSecond = next.nextElementSibling;
    var prevSecond = prev.previousElementSibling;
    //prevSecond.style.visibility = "hidden";
   /* selected[0].classList.remove("selected");
    selected[0].classList.add("prev");*/
    prev.classList.remove("prev");
    prev.classList.add('selected');
    next.classList.remove("next");
    next.classList.add('nextRightSecond');
    selected.classList.remove("selected");
    selected.classList.add('next');
    document.getElementById("prev").style.visibility = "hidden";
    }
    else{        
        var prevSecond = prev.previousElementSibling;
        prev.classList.remove("prev");
        prev.classList.add('selected');
        prevSecond.classList.remove("prevLeftSecond");
        prevSecond.classList.add("prev");
        selected.classList.remove("selected");
        selected.classList.add('next');
        document.getElementById("next").style.visibility = "visible";
        }
}