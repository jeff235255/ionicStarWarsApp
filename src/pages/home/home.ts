import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myVariable: string = "Hello i'm a string, i want to learn Ionic";

  constructor(public navCtrl: NavController) {

  }

  updateMyvale() {
    this.myVariable = "Here is the new string after updated.";
  }

}
