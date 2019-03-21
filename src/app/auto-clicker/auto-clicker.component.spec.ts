import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClickerComponent } from './auto-clicker.component';

describe('AutoClickerComponent', () => {
  let component: AutoClickerComponent;
  let fixture: ComponentFixture<AutoClickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoClickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
