function seal_click()
{
    document.getElementsByClassName("door-left")[0].className = "door-left-move";
    document.getElementsByClassName("door-right")[0].className = "door-right-move";
    document.getElementsByClassName("seal-button")[0].className = "seal-button-fadeout";
    document.getElementsByClassName("title")[0].classList.add("title-fadeout");
}