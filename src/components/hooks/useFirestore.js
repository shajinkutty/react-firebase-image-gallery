import { useState, useEffect } from "react";
import { db } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  // get all documents from image collection with id
  useEffect(() => {
    const unsub = db
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub(); //cleanup function
  }, [collection]);
  return { docs };
};
export default useFirestore;
