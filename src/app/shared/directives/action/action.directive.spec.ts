import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Event } from '@angular/router';
import { ActionDirectiveModule } from './action-directive.module';
import { ActionDirective } from './action.directive';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent],
      imports: [ActionDirectiveModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) Should emit event with payload when ENTER key is pressed`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event: KeyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) Should emit event with payload when clicked`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event: MouseEvent = new MouseEvent('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) Should emit event with payload when clicked or ENTER key pressed`, () => {
    const divEl: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const eventKeyUp: KeyboardEvent = new KeyboardEvent('keyup', {
      key: 'Enter',
    });
    const eventClick: MouseEvent = new MouseEvent('click');
    divEl.dispatchEvent(eventClick);
    expect(component.hasEvent()).withContext('Click Event').toBeTrue();
    component.clearEvent();
    divEl.dispatchEvent(eventKeyUp);
    expect(component.hasEvent()).withContext('key up Event').toBeTrue();
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;
  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public clearEvent(): void {
    this.event = null;
  }
}
