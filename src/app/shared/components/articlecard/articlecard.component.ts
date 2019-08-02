import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'articlecard-component',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.less']
})
export class ArticlecardComponent {
  @Input() myData;
  @Output() onWrapClick = new EventEmitter<string>();

  tabMap = new Map([
    ["good", "精华"],
    ["share", "分享"],
    ["ask", "问答"],
    ["job", "招聘"],
  ])

  handleWrapClick = function (id) {
    this.onWrapClick.emit(id)
  }

}
