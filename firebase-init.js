var app_firebase = {};
<script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>

// Initialize Firebase
var config = {
apiKey: "AIzaSyDlo88v-Wf_R2NhByPA5vEYl2bX_bT_ndk",
authDomain: "blood-donation-log.firebaseapp.com",
databaseURL: "https://blood-donation-log.firebaseio.com",
projectId: "blood-donation-log",
storageBucket: "blood-donation-log.appspot.com",
messagingSenderId: "623984422252"
};
firebase.initializeApp(config);

app_firebase = firebase;

