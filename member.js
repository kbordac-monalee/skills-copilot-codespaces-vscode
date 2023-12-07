function stillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "yes") {
        document.getElementById("memberName").style.display = "block";
        document.getElementById("memberName").style.visibility = "visible";
        document.getElementById("memberName").required = true;
    }
    else {
        document.getElementById("memberName").style.display = "none";
        document.getElementById("memberName").style.visibility = "hidden";
        document.getElementById("memberName").required = false;
    }
}