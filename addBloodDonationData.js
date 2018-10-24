function addBloodDonationData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var logsRef = firebase.database().ref("users/" + bloodDonationIDValue + "/bloodDonationLog/");
				var dateValue = document.getElementById("date").value;
				var locationValue = document.getElementById("location").value;
				var collectorValue = document.getElementById("collector").value;
				logsRef.once("value").then(function(logsSnapshot){
					var times = 1;
					logsSnapshot.forEach(function(logSnapshot){
						times++;
					})
					var bloodDonationRef = firebase.database().ref("users/" + bloodDonationIDValue + "/bloodDonationLog/" + times);
					bloodDonationRef.update({
						date: dateValue,
						location: locationValue,
						collector: collectorValue
					});
					alert("User: " + bloodDonationIDValue + " has donated blood!\n" + locationValue + " " + dateValue);
					clear();
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

function clear(){
	document.getElementById("bloodDonationID").value = "";
	document.getElementById("date").value = "";
	document.getElementById("location").value = "";
	document.getElementById("collector").value = "";
}