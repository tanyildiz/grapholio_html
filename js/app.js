function hiddenShowBlock() {
    var x = document.getElementById("work");
    var y = x.getElementsByTagName("img");
    
    if (y.src != "") {
        x.style.display = "hidden;";
    } else {
        x.style = "display: inline-block;";
        }
}
    
