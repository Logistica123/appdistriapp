import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-control-anim',
  templateUrl: './control-anim.component.html',
  styleUrls: ['./control-anim.component.scss'],
})
export class ControlAnimComponent implements OnInit {
  anim: Animation;
  @ViewChild('animDiv', {static: true}) animDiv: ElementRef;

  constructor(private animationController: AnimationController) {
  }

  ngOnInit() {
    this.createAnimation();
  }

  createAnimation() {
    this.anim = this.animationController.create('myAnim');
    this.anim
      .addElement(this.animDiv.nativeElement)
      .duration(1500)
      .easing('ease-out')
      .fromTo('opacity', 1, 0)
      .from('transform', 'translateY(50%)')
      .to('transform', 'translateY(0%)')
      .iterations(Infinity);
  }
}
