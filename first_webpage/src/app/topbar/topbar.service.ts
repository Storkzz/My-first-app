import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TopbarService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  ListAllPosts() {
    return;
  }
}
