function viewNextDonation() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var logsRef = firebase.database().ref("users/" + bloodDonationIDValue + "/bloodDonationLog/");
				logsRef.once("value").then(function(logsSnapshot){
					var temp;
					logsSnapshot.forEach(function(logSnapshot){
						var date = logSnapshot.val().date;
						temp = date;
					})
					var year = temp.slice(0, 4);
					var month = temp.slice(5, 7);
					var day = temp.slice(8);
					month = parseInt(month) + 3;
					year = parseInt(year);
					if(month > 12){
						month = month % 12;
						year += 1;
					}
					document.getElementById("data_display").hidden = false;
					document.getElementById("nextDonation").innerHTML = "วันที่ " + day + " เดือน " + month.toString().padStart(2, '0') + " ปี " + year;
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