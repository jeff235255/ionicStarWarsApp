import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  openDetails(film) {
    this.navCtrl.push('FilmDetailsPage', {film: film});
  }
}
