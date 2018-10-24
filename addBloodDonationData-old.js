function addBloodDonationData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var timesValue = document.getElementById("times").value;
				var path = "users/" + bloodDonationIDValue + "/bloodDonationLog/" + timesValue;
				var logsRef = firebase.database().ref(path);
				var dateValue = document.getElementById("date").value;
				var locationValue = document.getElementById("location").value;
				var collectorValue = document.getElementById("collector").value;
				logsRef.update({
					date: dateValue,
					location: locationValue,
					collector: collectorValue
				});
				console.log(path);
				alert("User: " + bloodDonationIDValue + " has donated blood!\n" + locationValue + " " + dateValue);
			} else {
				var alertMsg = "User: " + bloodDonationIDValue + " not found!\nPlease add user";
				alert(alertMsg);
			}
		} catch (err) {
			console.log(err);
		}
		
	})
}