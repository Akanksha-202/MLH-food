const firebaseConfig = {
    apiKey: "AIzaSyCjlHa5_pajgGd7PCpNjqNC97j9d8ZDSWs",
    authDomain: "food-auth-657de.firebaseapp.com",
    databaseURL: "https://food-auth-657de-default-rtdb.firebaseio.com",
    projectId: "food-auth-657de",
    storageBucket: "food-auth-657de.appspot.com",
    messagingSenderId: "799582992641",
    appId: "1:799582992641:web:ebf2cf2ac6eefb67e90300",
    measurementId: "G-SMRYK17WFG"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var blogDB = firebase.database().ref("feedback");
  
  document.getElementById("add").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var content = getElementVal("content");
  
    saveMessages(content);
  
  
    //   reset the form
    document.getElementById("add").reset();
  }
  
  const saveMessages = (content) => {
    var newContactForm = blogDB.push();
  
    newContactForm.set({
      content: content,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };