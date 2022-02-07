import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, addDoc, setDoc, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC91hCb4sozK4C5xEFk6Sg4KsGdoVPFcSA",
    authDomain: "zad1-79592.firebaseapp.com",
    databaseURL: "https://zad1-79592-default-rtdb.firebaseio.com",
    projectId: "zad1-79592",
    storageBucket: "zad1-79592.appspot.com",
    messagingSenderId: "285151466481",
    appId: "1:285151466481:web:63a0484c322a5091c1aa50",
    measurementId: "G-LJ84WP2VF7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let form = document.getElementsByTagName("form")[0];
let email = document.getElementsByTagName("input")[0];
let description = document.getElementsByTagName("textarea")[0];


async function sendEmail() {
    await addDoc(collection(db, "messages"), {
        email: email.value,
        description:description.value
    });


    let thanks = document.createElement('p');
    thanks.innerText = "Dziękuję za wysłanie wiadomości. Z pewnością na nią odpowiem :)";

    form.appendChild(thanks);

    email.value = "";
    description.value = "";
}


form.addEventListener("submit", sendEmail);
