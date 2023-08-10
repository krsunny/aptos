import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataList = [
    {
      id: 1,
      name: 'Option 1'
    },
    {
      id: 2,
      name: 'Option 2'
    },
    {
      id: 3,
      name: 'Option 3'
    },
    {
      id: 4,
      name: 'Option 4'
    },
    {
      id: 5,
      name: 'Option 5'
    },
    {
      id: 6,
      name: 'Option 6'
    },
    {
      id: 7,
      name: 'Option 7'
    },
    {
      id: 8,
      name: 'Option 8'
    },
    {
      id: 9,
      name: 'Option 9'
    },
    {
      id: 10,
      name: 'Option 10'
    }
  ];
  
  key = 'name' // Name of the key to be used to identify the attribute using which the item's text should be displayed.
  
  defaultTitle = 'Select an option'; // Default text to be shown when no items are selected.
  
  // selectedItem = null // No item would be selected by default
  // selectedItem = {
  //   id: 1,
  //   name: 'Item 1',
  //   isSelected: true
  // };
  // This will keep the first item ('Item 1') selected by default.
  
  itemChanged(e: {id: number}): void {
    console.log(e.id)
    // The item which was selected/unselected will be available here. 'id' will have the value of the selected item or 0 if the item was deselected. <keyName> should be set as per the key declared above. It will be 'name' in this example.
  }}
