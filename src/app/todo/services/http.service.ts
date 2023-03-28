import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dicionary } from '../types/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiId: string = '0af2fc43862c44c6ba03cd83d295ae18';
  constructor(private readonly http: HttpClient) {}

  addTask(todo: Dicionary): Observable<Dicionary> {
    return this.http.post<Dicionary>(
      `https://crudcrud.com/api/${this.apiId}/todo`,
      todo
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
    return this.http.put<Dicionary>(
      'https://crudcrud.com/api/' + this.apiId + '/todo/' + id,
      todo
    );
  }
}
