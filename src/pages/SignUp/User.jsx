export class User {
	constructor() {
		this.name = document.getElementById("fullname").value;
		this.email = document.getElementById("email").value;
		this.password = document.getElementById("password").value;
		this.type = document.getElementById("type").value;
	}
	addFiles(files) {
		this.files = files;
	}
	getJSON() {
		return {
			fullname: this.name,
			email: this.email,
			password: this.password,
			type: this.type,
			files: this.files,
		};
	}
}
