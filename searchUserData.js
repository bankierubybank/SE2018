function searchUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var userRef = firebase.database().ref("users/" + bloodDonationIDValue);
				userRef.once("value").then(function(userSnapshot){
					var firstName = userSnapshot.val().firstName;
					var lastName = userSnapshot.val().lastName;
					var nationalID = userSnapshot.val().nationalID;	
					var address = userSnapshot.val().address;
					var telephoneNumber = userSnapshot.val().telephoneNumber;
					var gender = userSnapshot.val().gender;
					var bloodGroup = userSnapshot.val().bloodGroup;
					document.getElementById("data_display").hidden = false;
					document.getElementById("user_name").innerHTML = firstName + " " + lastName;
					document.getElementById("user_nationalID").innerHTML = nationalID;
					document.getElementById("user_address").innerHTML = address;
					document.getElementById("user_telephoneNumber").innerHTML = telephoneNumber;
					document.getElementById("user_gender").innerHTML = gender;
					document.getElementById("user_bloodGroup").innerHTML = bloodGroup;
				});
				clear();
			} else {
				var alertMsg = "User: " + bloodDonationIDValue + " ไม่มีในระบบ!\nกรุณาลงทะเบียน";
				alert(alertMsg);
			}
		} catch (err) {
			console.log(err);
		}
	})
}

function clear(){
	document.getElementById("bloodDonationID").value = "";
}