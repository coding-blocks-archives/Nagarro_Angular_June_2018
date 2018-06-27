import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }
  provideData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
