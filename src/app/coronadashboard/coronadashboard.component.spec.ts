import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronadashboardComponent } from './coronadashboard.component';

describe('CoronadashboardComponent', () => {
  let component: CoronadashboardComponent;
  let fixture: ComponentFixture<CoronadashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronadashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
