import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ItemService } from 'src/app/modules/base/services/items/item.service';

import { MeliItemsComponent } from './meli-items.component';

describe('MeliItemsComponent', () => {
  let component: MeliItemsComponent;
  let fixture: ComponentFixture<MeliItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(), 
        HttpClientModule, 
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ MeliItemsComponent ],
      providers: [ItemService]
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
