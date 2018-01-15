import {Component} from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public templates;

  constructor(private storage: StorageService) {
    this.storage
      .getTemplates()
      .subscribe(result => {
        this.templates = result;
      });
  }

  getDate(date) {
    return new Date(date).toString();
  }

}
