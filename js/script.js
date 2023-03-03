let playground = document.querySelector("#dirty");
let toposquare = document.querySelectorAll(".toposquare");
let title = document.querySelector("#title");
let topo = document.createElement("img");
topo.src = "/images/red-dot.png";
topo.style.cssText = "width: 0.5em; height; 0.5em";

toposquare.forEach((cuadro) => {
	cuadro.addEventListener("click", function () {
		topoAttack(this);
	});
});

function topoAttack(elemnt) {
	elemnt.appendChild(topo);
}

// title.appendChild(topo);
