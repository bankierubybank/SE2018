function viewBenefits() {
	var databaseRef = firebase.database().ref("benefits/");

	databaseRef.once("value", function(snapshot){
		try {
			var table = '<table class="table"><thead><tr><th scope="col">ครั้งที่</th><th scope="col">ได้รับสิทธิ</th><th scope="col">สามารถใช้สิทธิได้ที่</th></tr></thead><tbody>';
			snapshot.forEach(function(benefitsSnapshot){
				var times = benefitsSnapshot.val().times;
				var benefit = benefitsSnapshot.val().benefit;
				var location = benefitsSnapshot.val().location;
				var row = '<tr><th scope="row">' + times + '</th><td>' + benefit + '</td><td>' + location + '</td></tr>';
				table = table + row;
			})
			table = table + '</tbody></table>';
			document.getElementById("table_display").innerHTML = table;
		} catch (err) {
			console.log(err);
		}
	})
}