import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './views/main/main.component';
import {TemplateComponent} from './views/template/template.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'template/:id',
    component: TemplateComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
