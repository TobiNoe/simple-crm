import { inject, Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  users: any = [];
  unsubUsers;

  constructor() {
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
        this.users.push(element.data());
      });
      console.log('users :>> ', this.users);
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
        (docRef) => this.updateUserDocID(docRef?.id));
  }

  async updateUserDocID (id: any) {
    const userDocRef = this.getDocRef("users", id);
    await updateDoc(userDocRef, {
      id: id
    });
  }

  async updateUser (user: any) {
    const userDocRef = this.getDocRef("users", user.id);
    console.log('userDocRef :>> ', userDocRef);
    console.log('id :>> ', user.id);
    console.log('user :>> ', user);
    await updateDoc(userDocRef, user);
  }

  async getUser (id: any) {
    const userDocRef = this.getDocRef("users", id);
    const user = await getDoc(userDocRef);
    return user.data();
  }
}
