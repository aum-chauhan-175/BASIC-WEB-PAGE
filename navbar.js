console.log("HEllo world");
const navigation_height_mobile = "100vh";
const navigation_height_desktop = "fit-content";
let IS_OPENED = false;// !dont temper it. it is used as state of navigation 
let trigger = document.getElementById("trigger");
console.log(trigger);
if (trigger === null) {
    console.error("Cant find the tigger ");
}
else {
    trigger.addEventListener("click", () => {
        console.log("click event fired");

        if (IS_OPENED) {
            IS_OPENED = false;
            //close the navigation
            if (window.innerWidth <= 600) {
                console.log("closing navigation");
                trigger.src = "PROJECT 2 /img/list.svg";
                // document.getElementById("navigation-list").style.opacity = "0";
                // document.getElementById("navigation-list").style.height = "0";
                document.getElementById("navigation-list").style.animation = "up 1s 1";
            }
        }
        else {
            IS_OPENED = true;
            //open the navigation
            if (window.innerWidth <= 600) {
                console.log("opening navigation");
                trigger.src = "PROJECT 2 /img/x-lg.svg";
                // document.getElementById("navigation-list").style.height = navigation_height_mobile;
                // document.getElementById("navigation-list").style.opacity = "1";
                document.getElementById("navigation-list").style.animation = "down 1s 1 forwards";
            }
        }
    });
}
let previous_width = window.innerWidth;
window.addEventListener("resize", () => {
    let width = window.innerWidth;
    if (width <= 600) {
        //close 
        IS_OPENED = false;
        console.log("closing navigation");
        document.getElementById("navigation-list").style.opacity = "0";
        document.getElementById("navigation-list").style.height = "0";

    }
    else {
        if (previous_width <= 600) {

            //switching from mobile to desktop
            IS_OPENED = false;
            document.getElementById("navigation-list").style.animation = "up .5s 1";
            trigger.src = "PROJECT 2 /img/list.svg";
        }
        document.getElementById("navigation-list").style.height = navigation_height_desktop;
        document.getElementById("navigation-list").style.opacity = "1";
    }
    previous_width = width;
});