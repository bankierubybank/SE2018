function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    if (errorCode === 'auth/wrong-password') {
	        alert('Wrong password.');
	        document.getElementById("password").value = "";
	    } else {
	        alert(errorCode + "\n" + errorMessage);
	    }
	});
	alert("Singed In!");
	window.location.replace("https://blood-donation-log.firebaseapp.com/home?");
}