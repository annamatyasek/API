import { NgModule } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

// const routes: Routes = [{ path: '', component: TodoComponent }];

@NgModule({
  declarations: [TodoComponent, AddComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    ButtonModule,
    RippleModule,
    BrowserAnimationsModule,
    ListboxModule,
    FormsModule,
    TableModule,
  ],

  bootstrap: [TodoComponent, AddComponent],

  providers: [HttpService],
})
export class TodoModule {}
