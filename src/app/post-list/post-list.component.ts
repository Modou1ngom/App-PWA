// src/app/components/post-list/post-list.component.ts

import { Component, OnInit } from '@angular/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  async fetchPosts(): Promise<void> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await response.json();
      this.posts = data; // Limiter à 10 publications pour un affichage simple
    } catch (error) {
      console.error("Erreur lors de la récupération des publications :", error);
    }
  }
}
