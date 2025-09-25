import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import {Storage} from '@ionic/storage';
import {BehaviorSubject, Observable} from 'rxjs';
import {ChatMessage} from '../../interfaces/ChatMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  firebaseAuthSubscription: any;
  adminFirebaseUID: string;
  senderUID: string;
  ref = firebase.database().ref('messages/');
  messages: ChatMessage[] = [];

  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  private messages$ = new BehaviorSubject<ChatMessage[]>([]);

  constructor(private afAuth: AngularFireAuth,
              private storage: Storage,
              private afs: AngularFirestore) {
    //
  }

  getIsAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  setIsAuthenticated$(isAuthenticated: boolean) {
    this.isAuthenticated$.next(isAuthenticated);
  }

  watchAuthStatus() {
    this.firebaseAuthSubscription = this.afAuth.authState.subscribe(user => {
      if (user) {
        this.senderUID = user.uid;
        this.setIsAuthenticated$(true);
      } else {
        this.setIsAuthenticated$(false);
      }
    });
  }

  stopWatchAuthStatus() {
    if (this.firebaseAuthSubscription) {
      this.firebaseAuthSubscription.unsubscribe();
    }
  }

  signIn() {
    return this.afAuth.signInWithEmailAndPassword('eliojavier86@gmail.com', 'eliojavier86@gmail.com');
  }

  signOut() {
    return this.afAuth.signOut();
  }

  async sendChatMessage(message) {
    await this.getAdminFirebaseUID();
    await this.getSenderUID();
    console.log(this.adminFirebaseUID);
    console.log(this.senderUID);
    return this.afs.collection('messages').add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      groupId: this.adminFirebaseUID + this.senderUID,
      message,
      senderUID: this.senderUID
    });
  }

  getAdminFirebaseUID() {
    return new Promise((resolve, reject) => {
      if (this.adminFirebaseUID && this.adminFirebaseUID !== '') {
        resolve(true);
      } else {
        this.storage.get('adminFirebaseUID').then(val => {
          this.adminFirebaseUID = 'xyz';
          resolve(true);
        });
      }
    });
  }

  getSenderUID() {
    return new Promise((resolve, reject) => {
      if (this.senderUID && this.senderUID !== '') {
        resolve(true);
      } else {
        this.storage.get('adminFirebaseUID').then(val => {
          this.signIn().then(res => {
            console.log(res.user.uid);
            this.senderUID = res.user.uid;
            resolve(true);
          });
        });
      }
    });
  }

  getMessages() {
    console.log('xyz' + this.senderUID);
    this.ref.orderByChild('groupId')
      .equalTo(this.adminFirebaseUID + this.senderUID)
      .on('value', value => {
        this.messages = [];
        value.forEach(val => {
          this.messages.push({
            createdAt: val.val().createdAt,
            from: val.val().senderUID,
            message: val.val().message,
            isMyMessage: val.val().senderUID === this.senderUID
          });
        });
      });
    this.setMessages$(this.messages);
  }

  setMessages$(messages: ChatMessage[]) {
    this.messages$.next(messages);
  }

  getMessages$(): Observable<ChatMessage[]> {
    return this.messages$.asObservable();
  }
}
