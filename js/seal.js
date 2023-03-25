function doors_button_click()
{
    document.getElementsByClassName("door-left")[0].className = "door-left-move";
    document.getElementsByClassName("door-right")[0].className = "door-right-move";
    document.getElementsByClassName("button-doors")[0].className = "button-doors-fadeout";
    document.getElementsByClassName("title")[0].classList.add("title-fadeout");
}