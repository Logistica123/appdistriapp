import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar(message = 'Ocurrió un error', action = '', duration = 3500) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }

}
