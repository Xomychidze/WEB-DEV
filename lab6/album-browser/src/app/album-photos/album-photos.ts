import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../services/album.service';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  template: `
    <section class="photos-page">
      <button class="back-btn" (click)="router.navigate(['/albums', albumId])">← Back to Album</button>
      <h2>Photos — Album #{{ albumId }}</h2>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div><span>Loading photos…</span>
      </div>

      <div *ngIf="!loading" class="photo-grid">
        <div *ngFor="let photo of photos" class="photo-card">
          <img [src]="photo.thumbnailUrl" [alt]="photo.title" loading="lazy" />
          <p class="photo-title">{{ photo.title }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .photos-page { max-width: 1100px; padding: 3rem 2rem; animation: fadeUp 0.6s ease both; }
    .back-btn {
      background: none; border: 1px solid var(--border); color: var(--text-muted);
      padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-family: 'DM Mono', monospace;
      font-size: 0.82rem; margin-bottom: 2rem; transition: color 0.2s, border-color 0.2s;
    }
    .back-btn:hover { color: var(--accent); border-color: var(--accent); }
    h2 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: var(--text); margin-bottom: 2rem; }
    .loading { display: flex; align-items: center; gap: 1rem; color: var(--text-muted); }
    .spinner { width: 28px; height: 28px; border: 3px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; }
    .photo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
    }
    .photo-card {
      background: var(--surface); border: 1px solid var(--border); border-radius: 6px;
      overflow: hidden; transition: transform 0.2s, border-color 0.2s;
    }
    .photo-card:hover { transform: translateY(-4px); border-color: var(--accent); }
    .photo-card img { width: 100%; height: 150px; object-fit: cover; display: block; }
    .photo-title {
      padding: 0.5rem 0.7rem; font-size: 0.72rem; color: var(--text-muted);
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  `]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => { this.photos = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}