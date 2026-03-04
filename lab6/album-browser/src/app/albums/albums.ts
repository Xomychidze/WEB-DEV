import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  visibleAlbums: Album[] = [];
  loading = true;
  pageSize = 20;
  skeletons = [1, 2, 3, 4, 5, 6, 7, 8]; // ← add this

  constructor(private albumService: AlbumService, private router: Router) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.visibleAlbums = this.albums.slice(0, this.pageSize); // ← здесь, внутри колбека
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  loadMore(): void {
    const next = this.visibleAlbums.length + this.pageSize;
    this.visibleAlbums = this.albums.slice(0, next);
  }

  goToAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
      this.visibleAlbums = this.visibleAlbums.filter(a => a.id !== id);
    });
  }
}