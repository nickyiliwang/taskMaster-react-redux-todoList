const admin = require("firebase-admin");

require("firebase/auth");
require("firebase/firestore");

const serviceAccount = require("../../functions/service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todo-app-f1c8a.firebaseio.com"
});

const db = admin.firestore();

module.exports = { admin, db };
