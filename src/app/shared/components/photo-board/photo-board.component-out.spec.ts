import {
  Component,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './models/photo.model';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotosList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }
  return photos;
}

describe(PhotoBoardComponent.name + 'outros', () => {
  let fixture: ComponentFixture<PhotoBoardTestComponent>;
  let component: PhotoBoardTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotosList();
    fixture.detectChanges();
    expect(component.board.rows.length).withContext('Number of Rows').toBe(2);
    expect(component.board.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.board.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});

@Component({
  template: `<app-photo-board [photos]="photos"></app-photo-board>`,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}
