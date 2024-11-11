// src/app/components/photo-list/photo-list.component.ts

import { Component, OnInit } from '@angular/core';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.fetchPhotos();
  }

  async fetchPhotos(): Promise<void> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data: Photo[] = await response.json();
      this.photos = data.slice(0, 20); // Limiter l'affichage à 20 photos
    } catch (error) {
      console.error("Erreur lors de la récupération des photos :", error);
    }
  }
}
