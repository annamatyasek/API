import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dicionary } from '../types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiId: string = '24d4c36f89144e05ae8fc952e05da0f9';
  constructor(private http: HttpClient) {}

  addPost(post: Dicionary): Observable<Dicionary> {
    return this.http.post<Dicionary>(
      'https://crudcrud.com/api/' + this.apiId + '/todo',
      post
    );
  }

  getTasks(): Observable<Dicionary[]> {
    return this.http.get<Dicionary[]>(
      'https://crudcrud.com/api/' + this.apiId + '/todo'
    );
  }

  deleteTasks(id: string): Observable<Dicionary> {
    return this.http.delete<Dicionary>(
      'https://crudcrud.com/api/' + this.apiId + '/todo/' + id
    );
  }
  updatePost(todo: Dicionary, id: string): Observable<Dicionary> {
    console.log(todo, id);
    return this.http.put<Dicionary>(
      'https://crudcrud.com/api/' + this.apiId + '/todo/' + id,
      todo
    );
  }
}
