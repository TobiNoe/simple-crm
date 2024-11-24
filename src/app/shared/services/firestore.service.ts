import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);

  constructor() {
    this.getRef();
  }

  getRef() {
    const usersRef = collection(this.firestore, "users");
    console.log('usersRef :>> ', usersRef);
    const userRef = doc(this.firestore, "users", "2FjsaVtxH1pxsbEjH1TT");
    console.log('userRef :>> ', userRef);
  }

  /* ngOnDestroy() {

  } */

  async saveUserInDB(user: any) {
    const docRef = await addDoc(collection(this.firestore, "users"), user)
      .catch(
        (err) => console.error(err)
      ).then(
        (docRef) => console.log("Document written with ID: ", docRef?.id));
  }
}
