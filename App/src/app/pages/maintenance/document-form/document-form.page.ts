import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.page.html',
  styleUrls: ['./document-form.page.scss'],
})
export class DocumentFormPage implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    // Esta pantalla ya no se utiliza: redirigimos al listado principal.
    this.router.navigateByUrl('document-list');
  }
}
