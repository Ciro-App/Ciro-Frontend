let _env = "DEV"; //PARA STAGGING
// let _env = "LOCAL"; // PARA EMULADOR F CLI

const URL_MESSAGES = "messages";
const URL_PICTURES = "pictures";

export class Settings {
  static get SERVER_URL() {
    switch (_env) {
      case "LOCAL":
        return "http://localhost:5001/ciro-app-prod/us-central1/apiCiroV1/functions";

      case "DEV":
        return "https://us-central1-ciro-app-prod.cloudfunctions.net/apiCiroV1/functions";

      default:
        return "https://us-central1-ciro-app-prod.cloudfunctions.net/apiCiroV1/functions";
    }
  }

  static getDefaultConfig() {
    switch (_env) {
      case "LOCAL":
        return {
          apiKey: "AIzaSyAMsQ6DMlYP_Z_ji64x02eNgc1UpJCkViU",
          authDomain: "ciro-app-prod.firebaseapp.com",
          projectId: "ciro-app-prod",
          storageBucket: "ciro-app-prod.appspot.com",
          messagingSenderId: "327984748470",
          appId: "1:327984748470:web:7bd331517e1ad789b39317",
          measurementId: "G-6E48PQZEZT"
        };
      case "DEV":
        return {
          apiKey: "AIzaSyAMsQ6DMlYP_Z_ji64x02eNgc1UpJCkViU",
          authDomain: "ciro-app-prod.firebaseapp.com",
          projectId: "ciro-app-prod",
          storageBucket: "ciro-app-prod.appspot.com",
          messagingSenderId: "327984748470",
          appId: "1:327984748470:web:7bd331517e1ad789b39317",
          measurementId: "G-6E48PQZEZT"
        };

      default:
        return {
          apiKey: "AIzaSyAMsQ6DMlYP_Z_ji64x02eNgc1UpJCkViU",
          authDomain: "ciro-app-prod.firebaseapp.com",
          projectId: "ciro-app-prod",
          storageBucket: "ciro-app-prod.appspot.com",
          messagingSenderId: "327984748470",
          appId: "1:327984748470:web:7bd331517e1ad789b39317",
          measurementId: "G-6E48PQZEZT"
        };
    }
  }
  static getDefaultAdobeConfig() {
    switch (_env) {
      case "LOCAL":
        return {
          clientId: "8c0cd670273d451cbc9b351b11d22318", //  DEFAULT ADOBE ID FOR LOCAL (?)
        };
      case "DEV":
        return {
          clientId: "175a37c322904bfa803952dd4a3bc9bb", //  CIRO ID FOR deploy  (?)
        };
      default:
        return {
          /* Pass your registered client id */
          clientId: "8c0cd670273d451cbc9b351b11d22318", //  DEFAULT ADOBE ID FOR LOCAL (?)
          // clientId: "175a37c322904bfa803952dd4a3bc9bb", //  CIRO ID FOR deploy  (?)
        };
    }
  }
  static getDefaultConverterConfig() {
    switch (_env) {
      case "LOCAL":
        return {
          path: "http://localhost:1212/",
        };
      case "DEV":
        return {
          path: "http://34.176.135.142:1212",
        };
      default:
        return {
          path: "http://34.176.135.142:1212",
        };
    }
  }

  static get environment() {
    return _env;
  }

  static get messagesEndpoint() {
    return URL_MESSAGES;
  }

  static get picturesEndpoint() {
    return URL_PICTURES;
  }
}
