//* ==== Variables ====

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const alias = document.querySelector("#alias");
const nationality = document.querySelector("#nationality");
const occupation = document.querySelector("#occupation");
const age = document.querySelector("#age");
const quote = document.querySelector("#quote");
const url = document.querySelector("#url");

let inputs = [fname, lname, alias, nationality, occupation, age, quote, url];

const submit = document.querySelector("button");

class Celebrity {
	constructor(fname, lname, alias, nationality, occupation, age, quote, url) {
		this.fname = fname;
		this.lname = lname;
		this.alias = alias;
		this.quote = quote;
		this.url = url;
		this.info = { Nationality: nationality, Occupation: occupation, Age: age };
	}

	createCardElement() {
		const main = document.createElement("main");
		const h2 = document.createElement("h2");
		const h3 = document.createElement("h3");
		const h4 = document.createElement("h4");
		const section = document.createElement("section");
		h3.innerHTML = `${this.fname} ${this.lname} `;
		main.appendChild(h3);
		h2.innerHTML = this.alias;
		main.appendChild(h2);
		for (let key in this.info) {
			let p = document.createElement("p");
			p.innerHTML = `${key}: ${this.info[key]}`;
			section.appendChild(p);
		}
		main.appendChild(section);
		h4.innerHTML = `"${this.quote}"`;
		main.appendChild(h4);
		main.style.background = `url(${this.url})
		center/cover no-repeat`;
		document.body.appendChild(main);
	}
}

submit.addEventListener("click", createCeleb);

function createCeleb() {
	let filled = false;
	inputs.forEach((input) => {
		if (input.value == "") {
			return;
		} else {
			filled = true;
		}
	});
	if (filled) {
		const celeb = new Celebrity(
			fname.value,
			lname.value,
			alias.value,
			nationality.value,
			occupation.value,
			age.value,
			quote.value,
			url.value
		);
		console.log(celeb);
		celeb.createCardElement();
	}
}
