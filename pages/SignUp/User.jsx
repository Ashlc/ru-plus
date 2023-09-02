export class User {
	constructor() {
		this.name = document.getElementById("fullname").value;
		this.email = document.getElementById("email").value;
		this.phone = document.getElementById("phone").value;
		this.password = document.getElementById("password").value;
		this.type = document.getElementById("type").value;
		this.error = this.checkEmpty();

		if (this.error) throw new Error('Empty fields detected.');
	}
	addFiles(files) {
		this.files = files;
	}

	checkEmpty() {
		if (this.name === null) return true;
		if (this.email === null) return true;
		if (this.phone === null) return true;
		if (this.password === null) return true;
		if (this.type === null) return true;
	}

	getJSON() {
		return {
			fullname: this.name,
			phone: this.phone,
			email: this.email,
			password: this.password,
			type: this.type,
			files: this.files,
		};
	}
}
