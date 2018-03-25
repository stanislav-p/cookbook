import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/', component: EditComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
