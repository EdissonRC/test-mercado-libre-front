import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/modules/base/services/items/item.service';
import { ITEM } from 'src/environments/environment';
import { SessionStorageService } from '../../service/session-storage.service';

const SS_KEY_ITEMS = 'items';

@Component({
  selector: 'meli-header',
  templateUrl: './meli-header.component.html',
  styleUrls: ['./meli-header.component.scss']
})
export class MeliHeaderComponent implements OnInit {

  @Output() responseItems = new EventEmitter<any>();
  
  public applicationForm!: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  public onSubmit() {
    this.router.navigate([`/items`], {queryParams: {search: this.applicationForm.value.productName}});
  }

  private initForm(){
    this.applicationForm = this.formBuilder.group({
      productName: ['', Validators.required]
    });
  }

  
}
