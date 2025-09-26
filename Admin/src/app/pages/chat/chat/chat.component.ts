import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Driver } from '../../../models/Driver';
import { FormControl } from '@angular/forms';
import { ChatMessage } from '../../../models/ChatMessage';
import { DriverService } from '../../../services/driver.service';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  newMessage = new FormControl();
  messages: ChatMessage[] = [];
  firebaseUID: string;
  drivers: Driver[] = [];
  selectedDriver: Driver;
  loading = false;
  showErrorMessage = false;
  ref = firebase.database().ref('chats/');

  constructor(private driverService: DriverService,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    this.afAuth.signInWithEmailAndPassword('admin@distapp.com', 'admin@distapp.com')
      .then(user => {
        this.getDrivers();
      });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getDrivers() {
    this.driverService.getDrivers()
      .subscribe((response: any) => {
        this.drivers = response.drivers;
        this.firebaseUID = response.firebase_uid;
      });
  }

  addMessagesToArray(messages) {
    this.messages = [];
    messages.forEach(val => {
      const data = val.data();
      this.messages.push({
        senderId: data.senderId,
        message: val.data().message,
        createdAt: val.data().createdAt
      });
    });
  }

  addMessage() {
    const collection = this.afs.collection('chats');
    collection.add({
      chatId: this.firebaseUID + this.selectedDriver.firebase_uid,
      senderId: this.firebaseUID,
      message: this.newMessage.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(res => {
      this.newMessage.setValue('');
      this.scrollToBottom();
    });
  }

  selectDriverChat(driver: Driver) {
    this.messages = [];
    this.selectedDriver = driver;
    const chatId = this.firebaseUID + this.selectedDriver.firebase_uid;
    const query = this.afs.collection('chats').ref;
    query.where('chatId', '==', chatId).orderBy('createdAt').onSnapshot(val => {
      this.addMessagesToArray(val);
    });
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      //
    }
  }
}
