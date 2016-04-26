function showSideBar() {
	if (!document.getElementById) {
		return;
	}
	var more = document.getElementById("more-production");
	var side = document.getElementById("sidebar");
	more.addEventListener("mouseover", function () {
		side.style.display = "block";
	})
	side.addEventListener("mouseover", function () {
		side.style.display = "block";
	})
	side.addEventListener("mouseout", function () {
		side.style.display = "none";
	})
}

window.onload = function () {
	showSideBar();
}