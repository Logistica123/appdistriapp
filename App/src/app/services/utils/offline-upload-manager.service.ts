import {Injectable} from '@angular/core';
import {HttpUploadFileService} from './http-upload-file.service';
import {Storage} from '@ionic/storage';

export interface FileToUpload {
  url: string;
  file: string;
  body: string;
  authToken: string;
}

const STORAGE_REQ_KEY_FILES = 'distriappimgreqs';

@Injectable({
  providedIn: 'root'
})
export class OfflineUploadManagerService {

  constructor(private httpUploadFileService: HttpUploadFileService,
              private storage: Storage) {
  }

  storeFileToUpload(url, file, body, authToken): Promise<any> {
    return new Promise((resolve, reject) => {
      const fileToUpload: FileToUpload = {
        url,
        file,
        body,
        authToken
      };

      this.storage.get(STORAGE_REQ_KEY_FILES).then(filesToUpload => {
        if (filesToUpload?.length > 0) {
          filesToUpload.push(fileToUpload);
        } else {
          filesToUpload = [];
          filesToUpload.push(fileToUpload);
        }
        this.storage.set(STORAGE_REQ_KEY_FILES, filesToUpload)
          .then(() => {
            resolve(true);
          });
      });
    });
  }

  checkFilesToUpload() {

  }

  uploadFile() {

  }
}
