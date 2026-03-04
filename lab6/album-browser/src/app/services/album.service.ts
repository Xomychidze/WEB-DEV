import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from "../models/photo";

const BASE = 'https://jsonplaceholder.typicode.com';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
  return this.http.get<Album[]>(`${BASE}/albums?_limit=20`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${BASE}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${BASE}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${BASE}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE}/albums/${id}`);
  }
}