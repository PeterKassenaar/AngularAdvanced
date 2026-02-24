import { Component } from '@angular/core';

interface Comment {
  id: number;
  author: string;
  text: string;
}

@Component({
  selector: 'app-comments',
  imports: [],
  templateUrl: './comments.html',
  styleUrl: './comments.css',
})
export class Comments {
  protected comments: Comment[] = Array.from({length: 500}, (_, i) => ({
    id: i + 1,
    author: `User ${i + 1}`,
    text: `This is comment number ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  }));
}
