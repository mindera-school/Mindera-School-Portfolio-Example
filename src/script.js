function changeProject(evt, cityName) {
	let tabProjects = document.getElementsByClassName("tabcontent");
	for (let i = 0; i < tabProjects.length; i++) {
		tabProjects[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	const tabMenu = document.getElementsByClassName("tablinks");
	for (let i = 0; i < tabMenu.length; i++) {
		tabMenu[i].className = tabMenu[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}
