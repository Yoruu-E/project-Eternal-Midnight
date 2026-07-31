const Image = document.querySelector("img");

Image.addEventListener('click', () => {
	const Src = Image.getAttribute("src");
	if (Src === "images/piskel.png") {
		Image.setAttribute("src", "images/Prey.png");
	} else{
		Image.setAttribute("src", "images/piskel.png");
	}
})

let But = document.querySelector("button");
let He = document.querySelector("h1");

function setUserName() {
	const Name = prompt("who seeks the midnight hours?");
	if (!Name) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to midnight, ${myName}`;
  }
	localStorage.setItem("name", Name);
	He.textContent = `Welcome to midnight, ${Name}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  He.textContent = `Welcome to midnight, ${storedName}`;
}

But.addEventListener("click", () => {
  setUserName();
});