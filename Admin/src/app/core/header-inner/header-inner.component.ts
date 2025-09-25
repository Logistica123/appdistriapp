import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  constructor(private router: Router) {

  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}

