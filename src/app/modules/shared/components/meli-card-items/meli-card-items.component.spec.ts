import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { MeliCardItemsComponent } from './meli-card-items.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MeliCardItemsComponent', () => {
  let component: MeliCardItemsComponent;
  let fixture: ComponentFixture<MeliCardItemsComponent>;

  const mockRouter = { navigate: jasmine.createSpy('navigate')};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliCardItemsComponent ],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [{provide: Router, useValue: mockRouter}],
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
