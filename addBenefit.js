function addBenefit() {
	var databaseRef = firebase.database().ref("benefits/");

	databaseRef.once("value", function(snapshot){
		try {
			var logsRef = firebase.database().ref("benefits/");
			var timesValue = document.getElementById("times").value;
			var benefitsValue = document.getElementById("benefit").value;
			var locationValue = document.getElementById("location").value;
			logsRef.once("value").then(function(logsSnapshot){
				var times = 1;
				logsSnapshot.forEach(function(logSnapshot){
					times++;
				})
				var benefitsRef = firebase.database().ref("benefits/" + times);
				benefitsRef.update({
					times: timesValue,
					benefit: benefitsValue,
					location: locationValue
				});
				alert("Benefit Added!");
				clear();
			});
		} catch (err) {
			console.log(err);
		}
		
	})
}

function clear(){
	document.getElementById("times").value = "";
	document.getElementById("benefit").value = "";			
	document.getElementById("location").value = "";
}