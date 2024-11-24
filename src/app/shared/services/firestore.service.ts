import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  users = [];
  unsubUsers;

  constructor() {
    console.log('DocRef :>> ', this.getDocRef("users", "2FjsaVtxH1pxsbEjH1TT"));
    this.unsubUsers = this.subscribeCollection("users");
  }

  getCollectionRef(CollectionID: string) {
    return collection(this.firestore, CollectionID);
  }

  getDocRef(collectionID: string, docID: string) {
    return doc(this.getCollectionRef(collectionID), docID);
  }

  subscribeCollection(CollectionID: string) {
    return onSnapshot(this.getCollectionRef(CollectionID), (list) => {
      this.users = [];
      list.forEach(element => {
        console.log('element.data() :>> ', element.data());
        console.log('element.id :>> ', element.id);
        /* this.users.push(this.setNoteObject(element.data(), element.id)); */
      });
    });
  }



  ngOnDestroy() {
    this.unsubUsers();
  }

  async saveUserInDB(user: any) {
    const docRef = await addDoc(collection(this.firestore, "users"), user)
      .catch(
        (err) => console.error(err)
      ).then(
        (docRef) => console.log("Document written with ID: ", docRef?.id));
  }
}
