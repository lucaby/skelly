function doors_button_click()
{
    document.getElementsByClassName("door-left")[0].className = "door-left-move";
    document.getElementsByClassName("door-right")[0].className = "door-right-move";
    document.getElementsByClassName("button-doors")[0].className = "button-doors-fadeout";
    document.getElementsByClassName("title")[0].classList.add("title-fadeout");

    setTimeout(() => {
        document.getElementsByClassName("doors")[0].style.display = "none";
    }, 1000);

    document.getElementsByClassName("title2")[0].classList.add("title2-fadein");
    document.getElementsByClassName("button-chair")[0].classList.add("button-chair-fadein");
}

function chair_button_click()
{
    document.getElementsByClassName("dark")[0].classList.add("dark-transition");
    setTimeout(() => {window.location.href = "profile.html";}, 1000);
}