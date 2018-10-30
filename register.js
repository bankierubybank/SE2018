function addUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var times = 1;
			snapshot.forEach(function(logSnapshot){
				times++;
			})
			var id = times.toString().padStart(10, '0');
			var userRef = firebase.database().ref("users/" + id);
			var firstNameValue = document.getElementById("firstName").value;			
			var lastNameValue = document.getElementById("lastName").value;
			var nationalIDValue = document.getElementById("nationalID").value;
			var addressValue = document.getElementById("address").value;
			var telephoneNumberValue = document.getElementById("telephoneNumber").value;
			var genderValue = document.getElementById("gender").value;
			var bloodGroupValue = document.getElementById("bloodGroup").value;
			userRef.update({
				firstName: firstNameValue,
				lastName: lastNameValue,
				nationalID: nationalIDValue,
				address: addressValue,
				telephoneNumber: telephoneNumberValue,
				gender: genderValue,
				bloodGroup: bloodGroupValue
			});
			alert("User: " + id + "\n" + firstNameValue + " " + lastNameValue + " has been added!");
			clear();
		} catch (err) {
			console.log(err);
		}
	})
}

function register(){
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var retype_password = document.getElementById("retype_password").value;
	if (password == retype_password) {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode == 'auth/weak-password') {
			    alert('The password is too weak.');
			} else {
			    alert(errorMessage);
		    }
		});
		alert("ลงทะเบียนสำเร็จ!");
		addUserData();
	} else {
		var alertMsg = "รหัสผ่านไม่ตรงกัน!";
		alert(alertMsg);
	}
}

function clear(){
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("retype_password").value = "";
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("nationalID").value = "";
	document.getElementById("address").value = "";
	document.getElementById("telephoneNumber").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("bloodGroup").value = "";
}