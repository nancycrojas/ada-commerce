import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

import { db } from '../firebase/config'

export const getAllProducts = async () => {
  const data = await getDocs(collection(db, 'products'))

  let products = []

  data.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  return products
}

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const productData = docSnap.data()
    const product = { ...productData, id: docSnap.id }
    return product
  } else {
    throw new Error('El producto no existe')
  }
}
