/* Aufgabenstellung


Im folgenden Code existiert die Klasse Person. Deine Aufgabe ist es, den Code zuende zu schreiben.
Du musst die Constructor-Methode programmieren. Diese soll einen Namen (string) und ein Alter (number) als Parameter akzeptieren. 
Die Methode Info() soll den Namen und das Alter als Zeichenkette zurückgeben.
Instanziiere ein Objekt mit dieser Klasse und rufe die Info-Methode auf. Der Wert soll in der Konsole ausgegeben werden.
 */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	info() {
		console.log(`${this.name} is ${this.age} years old `);
	}
}

const emma = new Person("Emanuela", 18);

emma.info();
