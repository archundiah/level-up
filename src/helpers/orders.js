import { addDoc, collection } from 'firebase/firestore'
import { database } from '../firebase'

export const setNewOrder = async (order) => {
  await addDoc(collection(database, 'orders'), order)
}