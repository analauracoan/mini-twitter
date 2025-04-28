// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebaseConfig from "../../firebase.config.json";

const connect = () => initializeApp(firebaseConfig);

export { connect };