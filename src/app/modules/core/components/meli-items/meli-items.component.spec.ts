import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliItemsComponent } from './meli-items.component';

describe('MeliItemsComponent', () => {
  let component: MeliItemsComponent;
  let fixture: ComponentFixture<MeliItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
