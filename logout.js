function logout() {
	firebase.auth().signOut().then(function() {
	  alert("ออกจากระบบสำเร็จ");
	  window.location.replace("https://blood-donation-log.firebaseapp.com/?");
	}).catch(function(error) {
	  // An error happened.
	});
}