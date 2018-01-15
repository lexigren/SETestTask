import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MainComponent} from './views/main/main.component';
import {TemplateComponent} from './views/template/template.component';
import {AppRoutingModule} from './routing.module';
import {RepositoryService} from './services/repository.service'
import {StorageService} from './services/storage.service'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  RepositoryService,
  StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
