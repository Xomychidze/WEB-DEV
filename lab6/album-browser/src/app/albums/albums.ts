import { Component, OnInit } from '@angular/core';

interface Album {
  id: number;
  title: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];          // full list from API
  visibleAlbums: Album[] = [];   // displayed albums
  skeletons = Array(5);          // for skeleton loader
  loading = true;
  pageSize = 10;                 // number of albums to load per click
  currentPage = 0;

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.loading = true;

    // Simulate API call
    setTimeout(() => {
      this.albums = Array.from({ length: 25 }, (_, i) => ({
        id: i + 1,
        title: `Album ${i + 1}`
      }));
      this.loadMore();
      this.loading = false;
    }, 1000);
  }

  loadMore() {
    const nextPage = this.currentPage + 1;
    const start = this.currentPage * this.pageSize;
    const end = nextPage * this.pageSize;
    this.visibleAlbums = this.visibleAlbums.concat(this.albums.slice(start, end));
    this.currentPage = nextPage;
  }

  goToAlbum(id: number) {
    console.log('Navigate to album', id);
    // Implement actual navigation logic
  }

  deleteAlbum(event: Event, id: number) {
    event.stopPropagation(); // Prevent click on li
    this.albums = this.albums.filter(album => album.id !== id);
    this.visibleAlbums = this.visibleAlbums.filter(album => album.id !== id);
  }

  trackByAlbumId(index: number, album: Album) {
    return album.id;
  }
}