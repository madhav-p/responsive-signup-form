const form = document.querySelector('.form form');

form.addEventListener('submit', (e) => {
	checkInputs(e);
});

function checkInputs(e) {
	const fName = document.getElementById('fname');
	const lName = document.getElementById('lname');
	const email = document.getElementById('email');
	const paswd = document.getElementById('paswd');
	console.log('checking inputs');

	//function to check for valid First Name
	if (fName.value.trim() === '') {
		displayErrorMessage(fName, 'First name cannot be empty!', e);
	} else {
		removeErrorClass(fName);
	}

	//function to check for valid Last Name
	if (lName.value.trim() === '') {
		displayErrorMessage(lName, 'Last name cannot be empty!', e);
	} else {
		removeErrorClass(lName);
	}

	//function to check for valid Email
	emailValue = email.value.trim();
	if (emailValue === '') {
		displayErrorMessage(email, 'Email cannot be empty!', e);
	} else if (!isEmail(emailValue)) {
		displayErrorMessage(email, 'Not a valid email!', e);
	} else {
		removeErrorClass(email);
	}

	//function to check for valid Password
	paswdValue = paswd.value.trim();
	if (paswdValue === '') {
		displayErrorMessage(paswd, 'Password cannot be empty!', e);
	} else if ((paswdValue.length < 6) | (paswdValue.length > 26)) {
		displayErrorMessage(paswd, 'Password should be 6-26 characters long!', e);
	} else {
		removeErrorClass(paswd);
	}
}

//function to display error message and prevent default behavior of submit
function displayErrorMessage(elem, message, e) {
	e.preventDefault();
	elem.style.borderColor = 'var(--red)';
	elem.parentElement.classList.add('error');
	elem.nextSibling.textContent = message;
}

//funcyion to check if an email is valid
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

//function to remove the error class if input is valid
function removeErrorClass(elem) {
	if (elem.parentElement.classList.contains('error')) {
		elem.parentElement.classList.remove('error');
		elem.style.border = '0.5px solid var(--grayish-blue)';
	}
}
