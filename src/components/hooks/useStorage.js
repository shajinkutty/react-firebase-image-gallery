import { useState, useEffect } from "react";
import { storage, db, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const dbRef = db.collection("images");
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timeStamp();
        dbRef.add({ url, createdAt });
        setUrl(url);
        setProgress(0);
      }
    );
  }, [file]);
  return { progress, url, error };
};

export default useStorage;
