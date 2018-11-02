function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	alert("Sign In with: " + email + " " + password);
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    if (errorCode == 'auth/user-not-found') {
	        alert("อีเมลนี้ยังไม่ได้ลงทะเบียน!");
	        document.getElementById("email").value = "";
	        document.getElementById("password").value = "";
	    } else if (errorCode == 'auth/wrong-password') {
	        alert("รหัสผ่านไม่ถูกต้อง!");
	        document.getElementById("password").value = "";
	    } else {
	        alert(errorCode + "\n" + errorMessage);
	    }
	});
	alert("เข้าสู่ระบบสำเร็จ!");
	window.location.replace("https://blood-donation-log.firebaseapp.com/home?");
}

function logout() {
	firebase.auth().signOut().then(function() {
	  alert("ออกจากระบบสำเร็จ!");
	  window.location.replace("https://blood-donation-log.firebaseapp.com/?");
	}).catch(function(error) {
	  // An error happened.
	});
}