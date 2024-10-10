import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumInterface } from '../../../core/models/album.interface';
import { AlbumService } from '../../../core/services-api/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent {
  albums$: Observable<Array<AlbumInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.getAlbums({ _limit: 10 });
  }
}
