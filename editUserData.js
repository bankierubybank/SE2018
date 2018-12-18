function queryUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var userRef = firebase.database().ref("users/" + bloodDonationIDValue);
				userRef.once("value").then(function(userSnapshot){
					var firstName = userSnapshot.val().firstName;
					var lastName = userSnapshot.val().lastName;
					var address = userSnapshot.val().address;
					var telephoneNumber = userSnapshot.val().telephoneNumber;
					document.getElementById("newfirstName").value = firstName;
					document.getElementById("newlastName").value = lastName;
					document.getElementById("newaddress").value = address;
					document.getElementById("newtelephoneNumber").value = telephoneNumber;
					document.getElementById("editForm").hidden = false;
					document.getElementById("bloodDonationID").value = bloodDonationIDValue;
					document.getElementById("bloodDonationID").setAttribute("disabled", "disabled");
					document.getElementById("queryUserBtn").hidden = true;
				});				
			} else {
				var alertMsg = "User: " + bloodDonationIDValue + " not found!\nPlease add user";
				alert(alertMsg);
			}
		} catch (err) {
			console.log(err);
		}
	})
}

function editUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var userRef = firebase.database().ref("users/" + bloodDonationIDValue);
				var firstNameValue = document.getElementById("newfirstName").value;			
				var lastNameValue = document.getElementById("newlastName").value;
				var addressValue = document.getElementById("newaddress").value;
				var telephoneNumberValue = document.getElementById("newtelephoneNumber").value;
				userRef.update({
					firstName: firstNameValue,
					lastName: lastNameValue,
					address: addressValue,
					telephoneNumber: telephoneNumberValue
				});
				alert("User: " + bloodDonationIDValue + " Update!");
				clear();
			} else {
				var alertMsg = "User: " + bloodDonationIDValue + " not found!\nPlease add user";
				alert(alertMsg);
			}
		} catch (err) {
			console.log(err);
		}
	})
}

function clear() {
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("address").value = "";
	document.getElementById("telephoneNumber").value = "";
	document.getElementById("editForm").hidden = true;
	document.getElementById("bloodDonationID").value = "";
	document.getElementById("bloodDonationID").removeAttribute("disabled");
	document.getElementById("queryUserBtn").hidden = false;
}