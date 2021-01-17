import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliCardComponent } from './meli-card.component';

describe('MeliCardComponent', () => {
  let component: MeliCardComponent;
  let fixture: ComponentFixture<MeliCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
