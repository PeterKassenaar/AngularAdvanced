// Generic testing pattern for a model/class
// NO Angular specific stuff here!

import {Person} from "./00-person.model";

// 1. Describe block for every test suite
describe('00 - The Person', () => {

	// 2. Variables used by this test suite
	let aPerson;

	// 3. Setup block, run before every individual test
	beforeEach(() => {
		aPerson = new Person('Peter');
	});

	// 4. Clean up after every individual test
	afterEach(() => {
		aPerson = null;
	});

	// 5. Perform each test in an it()-block
	it('should say Hello', () => {
		let msg = aPerson.sayHello();
		expect(msg).toBe('Hi, Peter');
	});

	// 6. More it()-blocks
	//...

});
