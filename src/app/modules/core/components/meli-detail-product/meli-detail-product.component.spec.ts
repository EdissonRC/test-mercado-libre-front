import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { of } from 'rxjs';

import { MeliDetailProductComponent } from './meli-detail-product.component';

describe('MeliDetailProductComponent', () => {
  let component: MeliDetailProductComponent;
  let fixture: ComponentFixture<MeliDetailProductComponent>;
  const activatedRoute = ({ data: of({ label: 'hello' })} as any) as ActivatedRoute; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeliDetailProductComponent ],
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: activatedRoute
      }]
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
