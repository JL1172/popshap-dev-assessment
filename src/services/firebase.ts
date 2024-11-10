import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseConfig";

class SingletonFirebaseService {
  public static readonly db = db;
}

export class FirebaseService {
  private readonly db = SingletonFirebaseService.db;
  public async addPlayer(
    fName: string,
    lName: string,
    score: number
  ): Promise<void> {
    await addDoc(collection(this.db, "players"), {
      fName,
      lName,
      score,
      createdAt: serverTimestamp(),
    });
  }
  public async getPlayers() {
    const playersRef = collection(this.db, "players");
    const q = query(playersRef, orderBy("score", "desc"), limit(5));
    const result = (await getDocs(q)).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return result;
  }
}
