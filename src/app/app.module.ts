import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { TaskAddComponent } from './components/task-add.component';
import { TaskEditComponent } from './components/task-edit.component';
import { NotFoundComponent } from './components/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'add-task', component: TaskAddComponent },
  { path: '**', component: NotFoundComponent } // wildcard for unknown routes
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskAddComponent,
    TaskEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
