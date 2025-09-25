import {Injectable} from '@angular/core';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {CameraPhotoFile} from '../../interfaces/CameraPhotoFile';
import {FilePath} from '@ionic-native/file-path/ngx';
import {File} from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class FileChooserService {

  constructor(private fileChooser: FileChooser,
              private filePath: FilePath,
              private file: File) {
  }

  chooseFile() {
    return new Promise((resolve, reject) => {
      this.fileChooser.open()
        .then(uri => {
          this.filePath.resolveNativePath(uri).then(filePath => {
            const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
            const path = filePath.substring(0, filePath.lastIndexOf('/') + 1);
            // if (filename.indexOf(' ') > -1) {
            //   const newFilename = filename.split(' ').join('_');
            //   this.copyFile(path, filename, path, newFilename).then((val) => {
            //     this.readFile(path, newFilename).then(documentFile => {
            //       resolve(documentFile);
            //     }).catch(err => {
            //       reject(err);
            //     });
            //   });
            // } else {
            //   this.readFile(path, filename).then(documentFile => {
            //     resolve(documentFile);
            //   }).catch(err => {
            //     reject(err);
            //   });
            // }
            this.readFile(path, filename).then(documentFile => {
              resolve(documentFile);
            }).catch(err => {
              reject(err);
            });
          }).catch(err => {
            reject(err);
          });
        }).catch(err => {
        reject(err);
      });
    });
  }

  readFile(path, filename) {
    return new Promise((resolve, reject) => {
      this.file.readAsDataURL(path, filename)
        .then(res => {
          const documentFile: CameraPhotoFile = {
            file: path + '/' + filename,
            src: res,
            filename,
            path
          };
          resolve(documentFile);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  copyFile(path: string, fileName: string, newPath: string, newFileName: string) {
    return new Promise((resolve, reject) => {
      this.file.copyFile(path, fileName, newPath, newFileName.split(' ').join('_'))
        .then(() => {
          resolve(newFileName);
        }).catch(err => {
        reject(err);
      });
    });
  }
}
