import firebase from'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnWxlnxOM_tIejQb15faC9WLbGlSMV3ZU",
  authDomain: "bombaapp-35cc5.firebaseapp.com",
  databaseURL: "https://bombaapp-35cc5-default-rtdb.firebaseio.com",
  projectId: "bombaapp-35cc5",
  storageBucket: "bombaapp-35cc5.appspot.com",
  messagingSenderId: "564963685839",
  appId: "1:564963685839:web:860179e7d3178eca0b8eba",
  measurementId: "G-TR63Y40DTZ"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export{firebase};
