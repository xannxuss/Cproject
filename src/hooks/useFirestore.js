// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";

// const useFirestore = async (collectionName) => {
//   const querySnapshot = await getDocs(collection(db, collectionName));
//   const notes = [];
//   querySnapshot.forEach((doc) => {
//     notes.push(doc.data());
//   });

//   return { notes };
// };

// export default useFirestore;

import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

// Custom hook to get the firestore data
const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const notes = [];
        querySnapshot.forEach((doc) => {
          notes.push({
            ...doc.data(),
            createdAt: doc.data().createdAt.toDate(),
          });
        });
        setDocs(notes);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getData();
  }, [collectionName, docs]);

  return { docs, isLoading };
};

export default useFirestore;
