import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliCardItemsComponent } from './meli-card-items.component';

describe('MeliCardItemsComponent', () => {
  let component: MeliCardItemsComponent;
  let fixture: ComponentFixture<MeliCardItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliCardItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliCardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
