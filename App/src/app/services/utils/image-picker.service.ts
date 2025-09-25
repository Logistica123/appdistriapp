import {Injectable} from '@angular/core';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImagePickerService {
  files: any = [];
  filesSrc: any = [];
  filenames: string[] = [];

  constructor(private imagePicker: ImagePicker,
              private file: File) {
  }

  pickImages(imagePickerOptions: ImagePickerOptions) {
    return new Promise((resolve, reject) => {
      this.imagePicker.getPictures(imagePickerOptions).then((results) => {
        results.map(result => {
          this.files = [];
          this.filesSrc = [];
          this.filenames = [];

          this.files.push(result);
          const filename = result.substring(result.lastIndexOf('/') + 1);
          const path = result.substring(0, result.lastIndexOf('/') + 1);
          this.file.readAsDataURL(path, filename).then(res => this.filesSrc.push(res));
          this.filenames.push(filename);
          const dataArray = [
            this.files,
            this.filesSrc,
            this.filenames
          ];
          resolve(dataArray);
        });
      }, (err) => {
        reject(err);
      });
    });
  }
}
