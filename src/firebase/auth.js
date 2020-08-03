import firebase from "./config";

export const signup = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signout = () => {
  return firebase.auth().signOut();
};

export const restoreSession = (saveUser) => {
  return firebase.auth().onAuthStateChanged(saveUser);
};
