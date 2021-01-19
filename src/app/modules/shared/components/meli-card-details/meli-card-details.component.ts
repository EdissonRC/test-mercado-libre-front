import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IItemResponse } from 'src/app/modules/core/interfaces/item-response';

@Component({
  selector: 'meli-card-details',
  templateUrl: './meli-card-details.component.html',
  styleUrls: ['./meli-card-details.component.scss']
})
export class MeliCardDetailsComponent implements AfterViewInit{

  public typeItem: string = '';
  public titleItem: string = '';
  public amountItem: number = 0;
  public descriptionItem: string = '';
  public priceCurrency: string = '';
  @Input() public itemInfo!: IItemResponse;

  ngAfterViewInit(): void {
    // const condition = this.itemInfo.item.condition === 'new'? 'Nuevo' : 'Usado';
    // this.typeItem = `${condition} - ${this.itemInfo.item.sold_quantity} vendidos`;
    // this.titleItem = this.itemInfo.item.title || '';
    // this.amountItem = this.itemInfo.item.price.amount || 0;
    // this.descriptionItem = this.itemInfo.item.description || '';
    // this.priceCurrency = this.itemInfo.item.price.currency || '';
  }

}
