import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomeNavigatorComponent } from './wellcome-navigator.component';

describe('WellcomeNavigatorComponent', () => {
  let component: WellcomeNavigatorComponent;
  let fixture: ComponentFixture<WellcomeNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomeNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomeNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
