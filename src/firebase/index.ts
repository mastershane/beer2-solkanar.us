import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyBhyTHUMoDreS07qkbFULreNYdlwaQpS6E',
  authDomain: 'todo-ea864.firebaseapp.com',
  databaseURL: 'https://todo-ea864.firebaseio.com',
  storageBucket: 'todo-ea864.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
