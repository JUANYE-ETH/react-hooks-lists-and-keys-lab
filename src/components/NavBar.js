import React from "react";

function NavBar() {
	const links = ["home", "about", "projects"];

	return (
		<nav>
			<a links={links} href="#home">
				home
			</a>
			<a links={links} href="#about">
				about
			</a>
			<a links={links} href="#projects">
				projects
			</a>
		</nav>
	);
}

export default NavBar;
