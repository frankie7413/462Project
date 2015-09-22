var main = function() {
	var college,
		fname,
		lname,
		email,
		password,
		passwordType,
		missingField,
		$content,
		errors = [],
		logEmail,
		logPassword;

	//makes sure that the fields have a valid input and fowards content to server
	function SectionmissingField(check){
		console.log('checking fields');
		if(check === false){
			$('#fillSection').empty(); //for when user does nor fill fields properly
			$('#fillSection').append('Please fill in area(s) with *.');
		} else {
			console.log('Inputs are complete');
			PostInformation();
		}
	}

		//makes sure that the fields have a valid input and fowards content to server
	function logField(check){
		console.log('checking fields');
		if(check === false){
			$('#logFill').empty(); //for when user does nor fill fields properly
			$('#logFill').append('Please fill in area(s) with *.');
		} else {
			console.log('Inputs are complete');
			window.location = 'profileView.html';
		}
	}

	//going to suppy information to sql server 
	function PostInformation () {
		console.log('suppose to empty');
		$('#submitForm').empty();
		$('#submitForm').append($('<p class="text-center">').text('Your infomation that you entered:'));

		$content = $('<ul class="text-center">');
		$content.append($('<li>').text('College: ' + college));
		$content.append($('<li>').text('First Name '+ fname));
		$content.append($('<li>').text('Last Name: '+ lname));
		$content.append($('<li>').text('Email: '+ email));
		$content.append($('<li>').text('password: '+ password));

		$('#submitForm').append($content);
	}


	//http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
	function validateEmail(email) {
    	//var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    	var re = /^([\w-]+(?:\.[\w-]+)*)@csu.fullerton\.edu/i;
    	return re.test(email);
	}

	function checkPassword (passwordVerify) {
		if (password === passwordVerify){
			if(validatePassword(passwordVerify)){
				$('#repasswordText').empty();
				$('#repasswordText').append('Retype-Password: ');
			} else {
				console.log('did not pass validation Password');
				missingField = false;
				$('#passwordText').empty();
				$('#passwordText').append('Password:* Password did not meet requirements');
				$('#repasswordText').empty();
				$('#repasswordText').append('Retype-Password:* Password did not meet requirements');
				$('#password').val(''); 
				$('#passwordType').val(''); 
			}
		} else {
			missingField = false;
			$('#passwordText').empty();
			$('#passwordText').append('Password:* Password did not match');
			$('#repasswordText').empty();
			$('#repasswordText').append('Retype-Password:* Password did not match');
			$('#password').val(''); 
			$('#passwordType').val(''); 

		}
	}

	//http://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters
	function validatePassword (testPassword) {
		console.log(testPassword);
		errors = [];
		if(testPassword.length < 8){
			errors.push('Your Password must be at least 8 characters');
		}

		if(testPassword.search(/[a-z]/i) < 0){
			errors.push('Your password must contain at least one letter.');
		}

		if (testPassword.search(/[0-9]/) < 0){
			errors.push(['Your password must contain at least one digit.']);
		}

		if (errors.length > 0){
			alert(errors.join('\n'));
			return false;
		}
		return true;
	}

	$('#logButton').click(function(){
		missingField = true;

		if($('#logEmail').val() === ''){
			missingField = false;
			$('#logEmailText').empty();
			$('#logEmailText').append('Email:*');
		} else {
			logEmail = $('#logEmail').val();
			if(validateEmail(logEmail)){
				console.log(logEmail);
				console.log('valid email login');
				$('#logEmailText').empty();
				$('#logEmailText').append('Email:');
			} else {
				logEmail = '';
				$('#logEmailText').empty();
				$('#logEmailText').append('Email:* Please Enter Valid Email');
			}
		}

		if($('#logPassword').val() === ''){
			missingField = false;
			$('#logPasswordText').empty();
			$('#logPasswordText').append('Password: *');
		} else {
			console.log('Password Saved');
			logPassword = $('#logPassword').val();
			$('#logPasswordText').empty();
			$('#logPasswordText').append('Password:');
		}

		logField(missingField);
	});


	//checks that all the fields have an input by user
	$('#signButton').click(function(){

		missingField = true;

		if($('#colleges').val() === 'college'){
			missingField = false;
			$('#collegeOption').empty();
			$('#collegeOption').append('College*');
		}else{
			college = $('#colleges').val();
			$('#collegeOption').empty();
			$('#collegeOption').append('College');
		}

		if($('#fname').val() === ''){
			missingField = false;
			$('#fnameText').empty();
			$('#fnameText').append('First Name:*');
		}else {
			fname = $('#fname').val();
			$('#fnameText').empty();
			$('#fnameText').append('First Name:');
		}

		if($('#lname').val() === ''){
			missingField = false;
			$('#lnameText').empty();
			$('#lnameText').append('Last Name:*');
		}else {
			lname = $('#lname').val();
			$('#lnameText').empty();
			$('#lnameText').append('Last Name:');
		}

		if($('#email').val() === ''){
			missingField = false;
			$('#emailText').empty();
			$('#emailText').append('Email:*');
		}else {
			email = $('#email').val();
			if(validateEmail(email)){
				$('#emailText').empty();
				$('#emailText').append('Email: ');
				console.log(email);
				console.log('valid email');
			} else {
				missingField = false;
				$('#emailText').empty();
				$('#emailText').append('Email:* Enter Valid Email');
			}
		}

		if($('#password').val() === ''){
			missingField = false;
			$('#passwordText').empty();
			$('#passwordText').append('Password:*');
		}else {
			password = $('#password').val();
			$('#passwordText').empty();
			$('#passwordText').append('Password:');
		}

		if($('#passwordType').val() === ''){
			missingField = false;
			$('#repasswordText').empty();
			$('#repasswordText').append('Retype-Password:*');
		}else {
			passwordType = $('#passwordType').val();
			checkPassword(passwordType); 
		}

		SectionmissingField(missingField);

	});
};

$(document).ready(main);

//http://jshint.com/
//configure enable jquery


























