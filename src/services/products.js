import { collection, getDocs } from 'firebase/firestore'

import { db } from '../firebase/config'

export const getAllProducts = async () => {
  const data = await getDocs(collection(db, 'products'))

  let products = []

  data.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`)
    // console.log(doc.data(), doc.id)

    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })
  //   console.log(products)
  return products
}
