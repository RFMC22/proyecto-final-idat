import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import { database } from "../firebase/Config"

export const configGetCollection = async <T>(collect:string): Promise<T[] | undefined> => {
  try {
    const collectionReference = collection(database, collect);
    const dataDocs = await getDocs(collectionReference);
    if (dataDocs) {
      const data = dataDocs.docs.map(doc => doc.data() as T);
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export const configPostCollection = async (collect:string, order_item:any) => {
  try {
    const collectionReference = collection(database, collect);
    const dataDocs = await addDoc(collectionReference,order_item);
    return `Orden con id: ${dataDocs.id} se agrego`
  } catch (error) {
    console.error(error);
  }
}

export const configPutCollection = async (collect:string, id:string, order_item:any) => {
  try {
    const collectionReference = doc(database, collect, id);
    await updateDoc(collectionReference, order_item);
    return `La orden con id: ${id} fue actualizada`
  } catch (error) {
    console.error(error);
  }
}

export const configDeleteCollection = async (collect:string, id:string) => {
  try {
    const collectionReference = doc(database, collect, id);
    await deleteDoc(collectionReference);
    return `La Orden con id: ${id} a sido eliminada de manera exitosa`
  } catch (error) {
    console.error(error);
  }
}