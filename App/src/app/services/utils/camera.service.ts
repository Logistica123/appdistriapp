import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {File} from '@ionic-native/file/ngx';
import {CameraPhotoFile} from '../../interfaces/CameraPhotoFile';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  imageFile: string;
  imageSrc: string;
  filename: string;
  imagePath: string;

  constructor(private camera: Camera,
              private file: File) {
  }

  takePicture() {
    return new Promise((resolve, reject) => {
      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.imageFile = '';
      this.imageSrc = '';
      this.filename = '';
      this.imagePath = '';

      this.camera.getPicture(options).then((imageData) => {
        this.imageFile = imageData;
        const filename = imageData.substring(imageData.lastIndexOf('/') + 1);
        const path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
        this.imagePath = path;
        this.file.readAsDataURL(path, filename)
          .then(res => {
            this.imageSrc = res;
            this.filename = filename;
            const cameraPhotoFile: CameraPhotoFile = {
              file: this.imageFile,
              src: this.imageSrc,
              filename: this.filename,
              path: this.imagePath
            };
            resolve(cameraPhotoFile);
          })
          .catch(err => {
            reject(err);
          });
      }, (err) => {
        reject(err);
      });
    });
  }
}
