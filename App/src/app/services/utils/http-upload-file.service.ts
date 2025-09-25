import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HTTP} from '@ionic-native/http/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class HttpUploadFileService {
  API_URL = environment.API_URL;
  V1 = 'v1/app/';

  constructor(private http: HTTP,
              private fileOpener: FileOpener,
              private storage: Storage,
              private file: File) {
  }

  uploadFile(url, file, authToken, body) {
    const uri = encodeURI(`${this.API_URL}${this.V1}${url}`);
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + authToken
    };

    return new Promise((resolve, reject) => {
      this.http.uploadFile(uri, body, headers, encodeURI(file), 'file')
        .then((data) => {
          resolve(true);
        }).catch(err => {
        reject(err);
      });
    });
  }

  downloadFile(url, body, authToken, filename, mime) {
    const uri = encodeURI(`${this.API_URL}${this.V1}${url}`);
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: 'Bearer ' + authToken
    };

    const filePath = this.file.dataDirectory + filename.split(' ').join('_');
    // for iOS use this.file.documentsDirectory

    return new Promise((resolve, reject) => {
      this.http.downloadFile(uri, body, headers, filePath)
        .then((data) => {
          this.fileOpener.open(filePath, mime)
            .then(() => {
              resolve(true);
            })
            .catch(err => {
              reject(err);
            });
        }).catch(err => {
        reject(err);
      });
    });
  }
}
