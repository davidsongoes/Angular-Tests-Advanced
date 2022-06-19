import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PhotoBoardService } from './photo-board.service';

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let controller: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService],
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    controller = TestBed.inject(HttpTestingController);
  });
});
