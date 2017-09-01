import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tabs = [
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

  @ViewChildren('dtab') declarativeTabs: QueryList<ElementRef>;
  @ViewChildren('ptab') programmaticTabs: QueryList<ElementRef>;

  onDeclarativeTabClosed({ detail: component }) {
    const tabs = this.declarativeTabs.filter(tab => tab.nativeElement === component);
    this.declarativeTabs.reset(tabs);
  }

  onProgrammaticTabClosed(event) {
    const component = event.detail;
    event.preventDefault();
    this.tabs.splice(component.id.split('-')[1], 1);
  }
}
