import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Storage} from '@ionic/storage';
import {ChatMessage} from '../../interfaces/ChatMessage';
import firebase from 'firebase';
import {IonContent} from '@ionic/angular';
import {DriverService} from '../../services/v1/driver.service';
import {Driver} from '../../interfaces/Driver';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit, OnDestroy {
  @ViewChild(IonContent) content: IonContent;
  newMessage: string;
  messages: ChatMessage[] = [];
  // adminFirebaseUid: string;
  // chatId: string;
  // ref = firebase.database().ref('chats/');
  dataAvailable = false;
  driver: Driver;
  driverSubscription: any;
  isLoggedIn = false;
  senderId: string;

  constructor(private storage: Storage,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private driverService: DriverService) {

  }

  ngOnInit() {
    this.driverSubscription = this.driverService.getDriver$()
      .subscribe(driver => {
        this.driver = driver;
        this.senderId = this.driver.firebase_uid;
        if (driver) {
          this.authenticateWithFirebase();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.driverSubscription) {
      this.driverSubscription.unsubscribe();
    }
  }

  authenticateWithFirebase() {
    this.afAuth.authState.subscribe(authUser => {
      if (!authUser) {
        this.isLoggedIn = false;
        this.afAuth.signInWithEmailAndPassword(this.driver.email, this.driver.email)
          .then(user => {
            this.isLoggedIn = true;
          });
      } else {
        this.isLoggedIn = true;
        this.getMessages();
      }
    });
  }

  addMessagesToArray(messages) {
    this.messages = [];
    const firstMessage: ChatMessage = {
      senderId: this.driver.admin.firebase_uid,
      message: '¿En qué puedo ayudarte?',
      createdAt: ''
    };
    this.messages.push(firstMessage);
    messages.forEach(val => {
      const data = val.data();
      // @ts-ignore
      this.messages.push({
        // @ts-ignore
        senderId: data.senderId,
        // @ts-ignore
        message: val.data().message,
        // @ts-ignore
        createdAt: val.data().createdAt
      });
    });
  }

  getMessages() {
    console.log('getting messages...');
    const chatId = this.driver.admin.firebase_uid + this.driver.firebase_uid;
    const query = this.afs.collection('chats').ref;
    query.where('chatId', '==', chatId).orderBy('createdAt').onSnapshot(val => {
      this.addMessagesToArray(val);
    });

    this.dataAvailable = true;
  }

  addMessage(message) {
    this.newMessage = '';
    const chatId = this.driver.admin.firebase_uid + this.driver.firebase_uid;
    const collection = this.afs.collection('chats');
    collection.add({
      chatId,
      senderId: this.senderId,
      message,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(res => {
      this.content.scrollToBottom();
    });
  }

  sendMessage() {
    this.addMessage(this.newMessage);
  }
}
