import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="about">
      <h2>About This App</h2>
      <p>Album Browser is an Angular SPA built for Web Development Lab 6, exploring routing, HTTP, and services.</p>
      <div class="info-grid">
        <div class="info-card">
          <span class="label">Course</span>
          <span>Web Development</span>
        </div>
        <div class="info-card">
          <span class="label">Lab</span>
          <span>Lab 6 — Routing & HTTP</span>
        </div>
        <div class="info-card">
          <span class="label">API</span>
          <span>JSONPlaceholder</span>
        </div>
        <div class="info-card">
          <span class="label">Framework</span>
          <span>Angular 19</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about { max-width: 720px; padding: 3rem 2rem; animation: fadeUp 0.6s ease both; }
    h2 { font-family: 'Playfair Display', serif; font-size: 2.8rem; color: var(--text); margin-bottom: 1rem; }
    p { color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 2.5rem; }
    .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
    .info-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 1.2rem 1.4rem;
      display: flex; flex-direction: column; gap: 0.4rem;
    }
    .label { font-family: 'DM Mono', monospace; font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); }
    @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  `]
})
export class AboutComponent {}