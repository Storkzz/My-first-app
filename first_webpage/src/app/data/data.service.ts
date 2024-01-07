import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/PostModel';

@Injectable()
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  ListAllPosts(): Observable<PostModel[]> {
    return this.client.get(`${this.baseUrl}/posts`).pipe((x) => {
      return x as Observable<PostModel[]>;
    });
  }
}
