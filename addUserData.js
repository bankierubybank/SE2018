function addUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (!snapshot.hasChild(bloodDonationIDValue)) {
				var userRef = firebase.database().ref("users/" + bloodDonationIDValue);
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
				alert("User: " + bloodDonationIDValue + "\n" + firstNameValue + " " + lastNameValue + " has been added!");
				clear();
			} else {
				var alertMsg = "User: " + bloodDonationIDValue + " already exists!";
				alert(alertMsg);
			}
		} catch (err) {
			console.log(err);
		}
		
	})
}

function clear(){
	document.getElementById("bloodDonationID").value = "";
	document.getElementById("firstName").value = "";			
	document.getElementById("lastName").value = "";
	document.getElementById("nationalID").value = "";	
	document.getElementById("address").value = "";
	document.getElementById("telephoneNumber").value = "";
	document.getElementById("gender").value = "";
	document.getElementById("bloodGroup").value = "";
}