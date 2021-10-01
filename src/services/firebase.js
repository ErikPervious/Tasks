import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

// Criar o arquivo de configuração e importar aqui/Create configuration file and import here;
// Exemplo/Example:
// export const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// };

import { firebaseConfig } from '../utils/tokenFirebase';

firebase.initializeApp(firebaseConfig);

export default firebase;