import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotosList } from 'src/app/shared/components/photo-board/test/build-photos-list';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';
import { Photo } from '../../shared/components/photo-board/models/photo.model';

describe(PhotoListComponent.name + ' Mock Provider', () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListModule, HttpClientModule],
      providers: [
        {
          provide: PhotoBoardService,
          useValue: {
            getPhotos(): Observable<Photo[]> {
              return of(buildPhotosList());
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data arrives`, () => {
    fixture.detectChanges();
    const board: HTMLElement =
      fixture.nativeElement.querySelector('app-photo-board');
    const loader: HTMLElement = fixture.nativeElement.querySelector('.loader');
    expect(board).withContext('Should display board').not.toBeNull();
    expect(loader).withContext('Should do not display loder').toBeNull();
  });
});
