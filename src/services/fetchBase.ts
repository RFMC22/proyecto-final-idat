import { collection, getDocs } from "firebase/firestore"
import { database } from "../firebase/Config"

export const configGetCollection = async <T>(collect:string): Promise<T[] | undefined> => {
  try {
    const collectionReference = collection(database, collect);
    const docs = await getDocs(collectionReference);
    if (docs) {
      const data = docs.docs.map(doc => doc.data() as T);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}


// export const configPostCollection = async <T>(collect:string): Promise<T[] | undefined> => {
//   try {
//     const collectionReference = collection(database, collect);
//     const docs = await getDocs(collectionReference);
//     if (docs) {
//       const data = docs.docs.map(doc => doc.data() as T);
//       return data;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const configPutCollection = async <T>(collect:string): Promise<T[] | undefined> => {
//   try {
//     const collectionReference = collection(database, collect);
//     const docs = await getDocs(collectionReference);
//     if (docs) {
//       const data = docs.docs.map(doc => doc.data() as T);
//       return data;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const configDeleteCollection = async <T>(collect:string): Promise<T[] | undefined> => {
//   try {
//     const collectionReference = collection(database, collect);
//     const docs = await getDocs(collectionReference);
//     if (docs) {
//       const data = docs.docs.map(doc => doc.data() as T);
//       return data;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }