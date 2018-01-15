import {Component, ElementRef} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  private selectedElement;
  private id;
  public template;

  constructor(private storage: StorageService,
              private route: ActivatedRoute,
              private elementRef: ElementRef,
              private sanitizer: DomSanitizer) {
    this.id = parseInt(route.snapshot.params['id'], 10);

    this.storage
      .getTemplates(this.id)
      .subscribe(result => {
        this.template = {
          id: result.id,
          template: this.sanitizer.bypassSecurityTrustHtml(result.template),
          modified: result.modified
        };
      });
  }

  onClick(e) {
    if (e.target.classList.contains('editable')) {
      this.selectedElement = e.target;
      this.elementRef.nativeElement.querySelector('.selected') &&
      this.elementRef.nativeElement.querySelector('.selected').classList.remove('selected');
      this.selectedElement.classList.add('selected');
    }
  }

  changeText(val) {
    this.selectedElement.innerText = val;
    this.saveChanges();
  }

  changeSize(val) {
    this.selectedElement.style.fontSize = val;
    this.saveChanges();
  }

  saveChanges() {
    this.template.modified = new Date().getTime();
    this.storage
      .storeTemplate(this.id, {
        id: this.template.id,
        modified: this.template.modified,
        template: this.elementRef.nativeElement.querySelector('.template-area').innerHTML
      })
      .subscribe(result => {
        setTimeout(() => this.selectedElement = this.elementRef.nativeElement.querySelector('.selected'));
      });
  }
}
