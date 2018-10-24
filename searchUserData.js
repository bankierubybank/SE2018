function searchUserData() {
	var databaseRef = firebase.database().ref("users/");

	databaseRef.once("value", function(snapshot){
		try {
			var bloodDonationIDValue = document.getElementById("bloodDonationID").value;
			if (snapshot.hasChild(bloodDonationIDValue)) {
				var userRef = firebase.database().ref("users/" + bloodDonationIDValue);
				var logsRef = firebase.database().ref("users/" + bloodDonationIDValue + "/bloodDonationLog/");
				userRef.once("value").then(function(userSnapshot){
					var firstName = userSnapshot.val().firstName;
					var lastName = userSnapshot.val().lastName;
					var nationalID = userSnapshot.val().nationalID;	
					var address = userSnapshot.val().address;
					var telephoneNumber = userSnapshot.val().telephoneNumber;
					var gender = userSnapshot.val().gender;
					var bloodGroup = userSnapshot.val().bloodGroup;
					document.getElementById("user_name").innerHTML = "ชื่อ-สกุล: " + firstName + " " + lastName;
					document.getElementById("user_nationalID").innerHTML = "เลขประจำตัวประชาชน: " + nationalID;
					document.getElementById("user_address").innerHTML = "ที่อยู่: " + address;
					document.getElementById("user_telephoneNumber").innerHTML = "เบอร์โทรศัพท์มือถือ: " + telephoneNumber;
					document.getElementById("user_gender").innerHTML = "เพศ: " + gender;
					document.getElementById("user_bloodGroup").innerHTML = "กลุ่มเลือด: " + bloodGroup;
				});
				logsRef.once("value").then(function(logsSnapshot){
					var logs = "ประวัติการบริจาคเลือด<br>";
					logsSnapshot.forEach(function(logSnapshot){
						var date = logSnapshot.val().date;
						var location = logSnapshot.val().location;
						var collector = logSnapshot.val().collector;
						var log = "วันที่: " + date + " สถานที่: " + location + " ผู้เก็บ: " + collector;
						logs = logs + log + "<br>";
					})
					document.getElementById("blood_donation_data").innerHTML = logs;
				});
				alert("User: " + bloodDonationIDValue + " Found!");
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

function clear(){
	document.getElementById("bloodDonationID").value = "";
}