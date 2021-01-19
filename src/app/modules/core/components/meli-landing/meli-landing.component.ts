import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/modules/base/interfaces/user';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { MeliHeaderComponent } from '../../../shared/components/meli-header/meli-header.component'
import { IItemsResponse } from '../../interfaces/items-response';

const SS_KEY_TOKEN = 'access-token';
const SS_VALUE_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpc3NvbiIsImxhc3RuYW1lIjoiUnVpeiJ9.NmNt3kHc9VqHzfYAdTcKl5sGVZg4EY555LRWZEbtCes';

@Component({
  selector: 'meli-landing',
  templateUrl: './meli-landing.component.html',
  styleUrls: ['./meli-landing.component.scss']
})
export class MeliLandingComponent implements OnInit {

  public itemsInfo!: IItemsResponse;

  constructor(private router: Router, private sessionStorageService: SessionStorageService) { }

  ngOnInit(): void {
    this.sessionStorageService.setSessionStorage(SS_KEY_TOKEN, SS_VALUE_TOKEN);
  }
}
