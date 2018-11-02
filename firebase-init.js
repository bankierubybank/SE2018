window.onload = initFirebase();

function initFirebase() {
	var config = {
	  apiKey: "AIzaSyDlo88v-Wf_R2NhByPA5vEYl2bX_bT_ndk",
	  authDomain: "blood-donation-log.firebaseapp.com",
	  databaseURL: "https://blood-donation-log.firebaseio.com",
	  projectId: "blood-donation-log",
	  storageBucket: "blood-donation-log.appspot.com",
	  messagingSenderId: "623984422252"
	};
	firebase.initializeApp(config);
}