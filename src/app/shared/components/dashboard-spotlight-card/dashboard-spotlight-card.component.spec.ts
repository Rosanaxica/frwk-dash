import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpotlightCardComponent } from './dashboard-spotlight-card.component';

describe('DashboardSpotlightCardComponent', () => {
  let component: DashboardSpotlightCardComponent;
  let fixture: ComponentFixture<DashboardSpotlightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSpotlightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSpotlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
