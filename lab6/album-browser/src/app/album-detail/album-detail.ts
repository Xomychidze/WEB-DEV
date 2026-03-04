import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="detail-page">
      <button class="back-btn" (click)="router.navigate(['/albums'])">← Back</button>

      <div *ngIf="loading" class="loading">
        <div class="spinner"></div><span>Loading…</span>
      </div>

      <div *ngIf="!loading && album" class="detail-card">
        <div class="meta">
          <span class="label">Album ID</span><span class="value">#{{ album.id }}</span>
          <span class="label">User ID</span><span class="value">{{ album.userId }}</span>
        </div>

        <h2>{{ album.title }}</h2>

        <div class="edit-section">
          <label class="field-label">Edit Title</label>
          <input [(ngModel)]="editTitle" class="title-input" type="text" />
          <button class="save-btn" (click)="save()" [disabled]="saving">
            {{ saving ? 'Saving…' : 'Save Changes' }}
          </button>
          <span *ngIf="saved" class="saved-msg">✓ Saved</span>
        </div>

        <div class="actions">
          <a [routerLink]="['/albums', album.id, 'photos']" class="photos-btn">View Photos →</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .detail-page { max-width: 640px; padding: 3rem 2rem; animation: fadeUp 0.6s ease both; }
    .back-btn {
      background: none; border: 1px solid var(--border); color: var(--text-muted);
      padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-family: 'DM Mono', monospace;
      font-size: 0.82rem; margin-bottom: 2.5rem; transition: color 0.2s, border-color 0.2s;
    }
    .back-btn:hover { color: var(--accent); border-color: var(--accent); }
    .loading { display: flex; align-items: center; gap: 1rem; color: var(--text-muted); }
    .spinner { width: 28px; height: 28px; border: 3px solid var(--border); border-top-color: var(--accent); border-radius: 50%; animation: spin 0.8s linear infinite; }
    .detail-card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 2rem 2.5rem; }
    .meta { display: flex; gap: 2rem; margin-bottom: 1.5rem; }
    .label { font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); display: block; }
    .value { font-size: 1rem; color: var(--text); }
    h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--text); margin: 0 0 2rem; line-height: 1.3; }
    .edit-section { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 2rem; }
    .field-label { font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); }
    .title-input {
      background: var(--bg); border: 1px solid var(--border); color: var(--text);
      padding: 0.7rem 1rem; border-radius: 5px; font-size: 0.95rem; width: 100%;
      outline: none; transition: border-color 0.2s;
    }
    .title-input:focus { border-color: var(--accent); }
    .save-btn {
      align-self: flex-start; background: var(--accent); color: #fff; border: none;
      padding: 0.7rem 1.5rem; border-radius: 4px; cursor: pointer; font-size: 0.9rem;
      transition: opacity 0.2s; font-family: 'DM Mono', monospace;
    }
    .save-btn:hover { opacity: 0.88; }
    .save-btn:disabled { opacity: 0.5; cursor: default; }
    .saved-msg { color: #4caf50; font-size: 0.88rem; font-family: 'DM Mono', monospace; }
    .photos-btn {
      display: inline-block; padding: 0.75rem 1.6rem; border: 1px solid var(--accent);
      color: var(--accent); text-decoration: none; border-radius: 4px;
      font-family: 'DM Mono', monospace; font-size: 0.85rem; transition: background 0.2s, color 0.2s;
    }
    .photos-btn:hover { background: var(--accent); color: #fff; }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  `]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  saving = false;
  saved = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  save(): void {
    if (!this.album) return;
    this.saving = true;
    const updated = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe(() => {
      this.album!.title = this.editTitle;
      this.saving = false;
      this.saved = true;
      setTimeout(() => this.saved = false, 2500);
    });
  }
}