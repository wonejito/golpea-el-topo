let playground = document.querySelector("#dirty");
let toposquare = document.querySelectorAll(".toposquare");
let title = document.querySelector("#title");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let topo = document.createElement("img");
topo.src = "/images/red-dot.png";
topo.style.cssText = "width: 0.9em; height; 0.9em";

// toposquare.forEach((cuadro) => {
// 	cuadro.addEventListener("click", function () {
// 		topoAttack(this);
// 	});
// });

// function topoAttack(elemnt) {
// 	elemnt.appendChild(topo);
// }

let letsPlay = setInterval(function () {
	topoAppears(toposquare);
}, 2000);

start.addEventListener("click", function () {
	letsPlay;
});

stop.addEventListener("click", function () {
	clearTimeout(letsPlay);
});

function topoAppears(item) {
	item = [...item];
	let random = Math.floor(Math.random() * item.length);
	item[random].appendChild(topo);
}
