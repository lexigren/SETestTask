import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

const templates = [
  {
    id: 1,
    name: 'One',
    template: `
          <div class='template'>
            <div class='editable'>
              One
            </div>
            <div class='container'>
                <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
          </div>`,
    modified: 1516008350380
  },
  {
    id: 2,
    name: 'Two',
    template: `
          <div class='template'>
            <div class='container'>
                <div class='editable'>
                One
              </div>
              <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
            <div class='editable'>
              Four
            </div>
          </div>`,
    modified: 1516008489616
  },
  {
    id: 3,
    name: 'Three',
    template: `
          <div class='template'>
            <div class='editable'>
              one
            </div>
            <div class='editable'>
              two
            </div>
            <div class='editable'>
              three
            </div>
          </div>`,
    modified: 1516008564742
  }
];

@Injectable()
export class RepositoryService {
  constructor(private http: Http) {
  }

  storeTemplate(id, template) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .put(`https://fake.backend/templates/${id}`, template, {headers: headers})
      .catch(err => Observable.of(template));
  }

  getTemplates() {
    return this.http.get('https://fake.backend/templates')
      .catch(
        (error: Response) => {
          return Observable.of(templates);
        }
      );
  }
}
