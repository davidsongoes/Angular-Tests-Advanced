import { Component, Input } from '@angular/core';
import { Photo } from './models/photo.model';

@Component({
  selector: 'app-photo-board',
  templateUrl: 'photo-board.component.html',
  styleUrls: ['photo-board.component.scss'],
})
export class PhotoBoardComponent {
  @Input() public phots: Photo[];
  public rows: any[][] = [];
  constructor() {}
}
