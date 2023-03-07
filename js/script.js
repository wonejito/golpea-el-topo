let playground = document.querySelector("#dirty");
let toposquare = document.querySelectorAll(".toposquare");
let title = document.querySelector("#title");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let topo = document.createElement("img");
topo.src = "/images/red-dot.png";
topo.style.cssText = "width: 0.9em; height; 0.9em";

start.addEventListener("click", function () {
	let rndmTime = Math.floor(Math.random() * 5000);
	let letsPlay = setInterval(function () {
		topoAppears(toposquare);
	}, 1000);

	stop.addEventListener("click", function () {
		clearTimeout(letsPlay);
	});
});

function topoAppears(item) {
	item = [...item];
	let random = Math.floor(Math.random() * item.length);
	randomArray = ["center", "flex-end", "flex-start"];

	// frstPrprty = randomArray(Math.floor(Math.random() * randomArray.length));
	// scndPrprty = randomArray(Math.floor(Math.random() * randomArray.length));

	topoDaddy = item[random];
	// topoDaddy.style.cssText = `display: flex; justify-content: ${frstPrprty}; align-items: ${scndPrprty};`;
	topoDaddy.appendChild(topo);
}
