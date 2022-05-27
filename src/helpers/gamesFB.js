import { collection, getDocs, query, where } from 'firebase/firestore'
import { database } from '../firebase'

export const getGamesFromFB = async (platform) => {
  const q = query(
    collection(database, 'games'),
    where('platform', '==', platform),
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}


export const getGameDetail = async (id) => {
  const q = query(
    collection(database, 'games'),
    where('id', '==', id),
  )
  const snapshot = await getDocs(q)
  return { docId: snapshot.docs[0].id, ...snapshot.docs[0].data() }
}
