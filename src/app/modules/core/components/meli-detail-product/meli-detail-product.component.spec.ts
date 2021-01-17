import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliDetailProductComponent } from './meli-detail-product.component';

describe('MeliDetailProductComponent', () => {
  let component: MeliDetailProductComponent;
  let fixture: ComponentFixture<MeliDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliDetailProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
