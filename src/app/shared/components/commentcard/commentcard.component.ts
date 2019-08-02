import { Component, Input, } from '@angular/core';

@Component({
  selector: 'commentcard-component',
  templateUrl: './commentcard.component.html',
  styleUrls: ['./commentcard.component.less']
})
export class CommentcardComponent {
  @Input() myData;
}
