import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliHeaderComponent } from './meli-header.component';

describe('HeaderComponent', () => {
  let component: MeliHeaderComponent;
  let fixture: ComponentFixture<MeliHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeliHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
