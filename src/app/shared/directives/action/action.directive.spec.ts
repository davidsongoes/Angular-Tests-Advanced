import { TestBed } from '@angular/core/testing';
import { ActionDirectiveModule } from './action-directive.module';
import { ActionDirective } from './action.directive';

describe(ActionDirective.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionDirectiveModule],
    }).compileComponents();
  });
});
