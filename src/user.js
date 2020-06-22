import firebase from "./firebase";

function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function logIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function logOut() {
  return firebase.auth().signOut();
}

export { signUp, logIn, logOut };
