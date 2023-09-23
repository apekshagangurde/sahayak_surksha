// firebaseConfig.js
const firebaseConfig = {
    apiKey: "AIzaSyAhOsABlPM4gi_ySMFv9RUmxTEsR_bhHAE",
    authDomain: "web-auth-928f5.firebaseapp.com",
    projectId: "web-auth-928f5",
    storageBucket: "web-auth-928f5.appspot.com",
    messagingSenderId: "1017247121723",
    appId: "1:1017247121723:web:c0a38d2f7cdf1f6a88b71e",
    measurementId: "G-7DJCNSP54E"
};
// Initialize Firebase (Ensure you have initialized it with the correct firebaseConfig)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to create the "users" collection (optional, if not already created)
function createUsersCollection() {
  // Check if the collection already exists
  db.collection("users")
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        // Collection does not exist, create it
        db.collection("users")
          .add({ initialData: "This is a placeholder document to create the collection" })
          .then(() => {
            console.log("Users collection created successfully!");
          })
          .catch((error) => {
            console.error("Error creating users collection: ", error);
          });
      } else {
        console.log("Users collection already exists.");
      }
    })
    .catch((error) => {
      console.error("Error checking for users collection: ", error);
    });
}

// Call the function to create the "users" collection
createUsersCollection();
  