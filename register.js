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
			clear();
			window.location.replace("https://blood-donation-log.firebaseapp.com/?");
		} catch (err) {
			console.log(err);
		}
	})
}

function clear(){
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("nationalID").value = "";
	document.getElementById("address").value = "";
	document.getElementById("telephoneNumber").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("bloodGroup").value = "";
}