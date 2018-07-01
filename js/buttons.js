
function onNavClick(x) {
    x.classList.toggle("change");

	var nav_id = document.getElementById("nav_box");
	var nav_button = document.getElementById("nav_button");
	
	
	if (nav_id.style.width === "6.5em") {
		nav_id.style.width = "19.5em";
		
		nav_button.style.right = "15em";
    } else {
		nav_id.style.width = "6.5em";
		
		nav_button.style.right = "2em";
    }
	
}