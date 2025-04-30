import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseConfig from "../../firebase.config.json";

let app;
let database;

const connect = () => {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  return { app, database };
};

export { connect };
