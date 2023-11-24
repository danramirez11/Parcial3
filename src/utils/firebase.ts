import { firebaseConfig } from "../firebaseConfig";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { addDoc, collection, getDocs } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addInfo = async () => {
    try {
        const docRef = await addDoc(collection(db, "tiles"), {
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export const getInfo = async () => {
    const querySnapshot = await getDocs(collection(db, "tiles"));

    const transformed: any = []
    querySnapshot.forEach((doc) => {
    const data = doc.data;

    transformed.push({
        id: doc.id, ...data
    })
});

return transformed;
}

export default {
    addInfo, getInfo
}