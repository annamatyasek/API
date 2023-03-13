import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './todo/components/add/add.component';
import { TodoComponent } from './todo/components/todo/todo.component';

const routes: Routes = [
  {
    path: 'todo/list',
    component: TodoComponent,
  },
  {
    path: 'todo/add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
