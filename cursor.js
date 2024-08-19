let details = navigator.userAgent; 
let regexp = /android|iphone|kindle|ipad/i; 
let isMobileDevice = regexp.test(details); 
const cursor_dot = document.getElementById("cursor_dot");
const cursor_outline = document.getElementById("cursor_outline");

if (!isMobileDevice) { 
    window.addEventListener("mousemove", function (e) {
        const posx = e.clientX;
        const posy = e.clientY;
        cursor_dot.style.left = posx + "px";
        cursor_dot.style.top = posy + "px";
        cursor_outline.animate({left : posx + "px", top : posy + "px"}, {duration : 400, fill : "forwards"});
    })
    document.documentElement.addEventListener('mouseleave', function (e) {
        cursor_outline.animate({opacity : 0}, {duration : 500, fill : "forwards"});
        cursor_dot.animate({opacity : 0}, {duration : 500, fill : "forwards"});
    })
    document.documentElement.addEventListener('mouseenter', function (e) {
        cursor_dot.style.opacity= "1";
        cursor_dot.style.opacity= "1";
        cursor_outline.animate({opacity : 1}, {duration : 500, fill : "forwards"});
        cursor_dot.animate({opacity : 1}, {duration : 500, fill : "forwards"});
    })
} 
else { 
	cursor_dot.remove()
    cursor_outline.remove()
}