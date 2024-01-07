import { Component } from '@angular/core';
import { DataService } from '../data/data.service';
import { PostModel } from '../models/PostModel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  posts: PostModel[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.ListAllPosts().subscribe((x) => (this.posts = x));
  }
}
