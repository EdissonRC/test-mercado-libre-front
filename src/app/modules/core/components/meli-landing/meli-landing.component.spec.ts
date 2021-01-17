import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliLandingComponent } from './meli-landing.component';

describe('MeliLandingComponent', () => {
  let component: MeliLandingComponent;
  let fixture: ComponentFixture<MeliLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
