import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {RepositoryService} from './repository.service'


@Injectable()
export class StorageService {

  private templates: any;

  constructor(private repository: RepositoryService) {

  }

  storeTemplate(id, template) {
    return this.repository
      .storeTemplate(id, template)
      .do(result => {
        const tmp = this.templates.find(t => t.id === id);
        Object.assign(tmp, result);
      });
  }

  getTemplates(id?) {
    return (this.templates ? Observable.of(this.templates) :
      this.repository
        .getTemplates()
        .do(templates => this.templates = templates))
      .map(templates => !id ? templates : templates.find(t => t.id === id));
  }
}
