import { Component, ViewChild } from '@angular/core';
import { TestComponent } from '../../shared/components/test/test.component';


@Component({
  selector: 'test-page-component',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.less']
})
export class TestPageComponent {
  @ViewChild('chlid', { static: false })
  chlid: TestComponent;

  fatherNum: number = 0;
  onFatherClick = (num: number) => {
    if (num === 1) {
      this.fatherNum++;
    } else if (num === 2) {
      this.fatherNum--;
    }
  }


  ngForList = [
    { id: 1, name: '11111', n1: 1, n2: 3, title: '11', checked: true },
    { id: 2, name: '22222', n1: 7, n2: 3, title: '22', checked: false },
    { id: 3, name: '33333', n1: 2, n2: 3, title: '33', checked: true },
    { id: 4, name: '44444', n1: 9, n2: 3, title: '44', checked: false },
  ]
}
