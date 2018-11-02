function searchBloodDonationData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var logsRef = firebase.database().ref("users/" + bloodDonationIDValue + "/bloodDonationLog/");
				logsRef.once("value").then(function(logsSnapshot){
					var times = 1;
					var table = '<table class="table"><thead><tr><th scope="col">ครั้งที่</th><th scope="col">วันที่</th><th scope="col">สถานที่</th><th scope="col">ผู้เก็บ</th></tr></thead><tbody>';
					logsSnapshot.forEach(function(logSnapshot){
						var date = logSnapshot.val().date;
						var location = logSnapshot.val().location;
						var collector = logSnapshot.val().collector;
						var row = '<tr><th scope="row">' + times + '</th><td>' + date + '</td><td>' + location + '</td><td>' + collector + '</td></tr>';
						table = table + row;
						times += 1;
					})
					table = table + '</tbody></table>';
					document.getElementById("table_display").innerHTML = table;
				});
				alert("User: " + bloodDonationIDValue + " Found!");
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