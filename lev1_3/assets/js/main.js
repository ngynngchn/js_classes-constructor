/* Aufgabenstellung

Erweitere die Klasse Person aus der vorherigen Aufgabe.
Füge die Methode write() hinzu. Diese soll die Eigenschaften der Person ins HTML schreiben
Erstelle ein HTML-Formular mit den Feldern Name, Alter und Prüfung bestanden? 
und einen Button Person erstellen
Beim Abschicken des Formulars soll ein neues Objekt erstellt werden und die write() Methode aufgerufen werden.
Hat eine Person die Prüfung nicht bestanden, soll der Name in roter Schrift angezeigt werden
 */

//* ==== Variables ====
const result = document.querySelector("#result");
const passed = document.querySelector("#examCheck");
const submit = document.querySelector("#button");
const fname = document.querySelector("#name");
const age = document.querySelector("#age");

const getInfo = () => {
	const person = new Character(fname.value, age.value);
	console.log(person);
	person.write();
};

submit.addEventListener("click", getInfo);

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	info() {
		console.log(`${this.name} is ${this.age} years old `);
	}
}

class Character extends Person {
	constructor(name, age) {
		super(name, age);
	}
	write() {
		if (!passed.checked) {
			result.innerHTML += `<li style ="color: red" >${this.name}, ${this.age} years old</li> `;
		} else {
			result.innerHTML += `<li>${this.name}, ${this.age} years old</li> `;
		}
	}
}
