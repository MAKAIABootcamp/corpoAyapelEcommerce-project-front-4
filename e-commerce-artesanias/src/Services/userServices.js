import { collection, query, getDocs, where } from "firebase/firestore";
import { dataBase } from "../Firebase/FirebaseConfig";

const collectionName = "Users";

export const getUserFromDatabase = (email) => {
    return new Promise((resolve, reject) => {
        try {
            const collectionUsers = collection(dataBase, collectionName);
            const querySnapshot = query(collectionUsers, where("email", "==", email));
            getDocs(querySnapshot)
                .then(documents => {
                    documents.forEach((document) => {
                        console.log(document);
                        return resolve({
                            id: document.id,
                            ...document.data()
                        });
                    });

                    return resolve({});
                });
        } catch (error) {
            console.log(error);
            return reject(error);
        }
    })
}