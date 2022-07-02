import { Injectable } from '@angular/core';
import { PhotoBoardService } from './photo-board.service';
import { Observable, of } from 'rxjs';
import { Photo } from '../models/photo.model';
import { buildPhotosList } from '../test/build-photos-list';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotosList());
  }
}
