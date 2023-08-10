import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-drop',
  templateUrl: './custom-drop.component.html',
  styleUrls: ['./custom-drop.component.scss']
})
export class CustomDropComponent {
  @Input('data') data!: Array<any>;
  @Input('defaultTitle') defaultTitle!: string;
  @Input('keyName') keyName!: string;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  @Input('selectedItem') selectedItem: any;
  showMenuItems = false;
  selectedMenu: any;

  selectItem(currentItem: any): void {
    currentItem.isSelected = true;
    this.selectedItem = currentItem.isSelected ? currentItem : null;

    this.itemSelected.emit({ id: currentItem.isSelected ? currentItem.id : 0 });
    this.showMenuItems = false;
  }

}
