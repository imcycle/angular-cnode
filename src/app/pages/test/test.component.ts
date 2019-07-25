import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {
  ngForList = [
    { id: 1, name: '11111', n1: 1, n2: 3, title: '11', checked: true },
    { id: 2, name: '22222', n1: 7, n2: 3, title: '22', checked: false },
    { id: 3, name: '33333', n1: 2, n2: 3, title: '33', checked: true },
    { id: 4, name: '44444', n1: 9, n2: 3, title: '44', checked: false },
  ]
}
