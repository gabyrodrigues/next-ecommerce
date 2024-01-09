import { collection, getDocs, query } from "firebase/firestore";
import { db } from ".";

export async function getProducts() {
  const q = query(collection(db, "products"));

  const results = await getDocs(q);
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}
