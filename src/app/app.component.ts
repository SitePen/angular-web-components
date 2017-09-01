import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabObjects = [
    {
      title: 'Tab 01',
      closable: true,
      pane: {
        title: 'Tab 01 Content'
      }
    },
    {
      title: 'Tab 02',
      closable: false,
      pane: {
        title: 'Tab 02 Content'
      }
    }
  ];

  @ViewChildren('tab') tabs: QueryList<ElementRef>;
  @ViewChildren('statefulTab') statefulTabs: QueryList<ElementRef>;

  onTabClosed({ detail: component }) {
    console.log(component);
  }

  onStatefulTabClosed(event) {
    event.preventDefault();
    const component = event.detail;
    this.tabObjects.splice(component.dataset.index, 1);
  }
}
