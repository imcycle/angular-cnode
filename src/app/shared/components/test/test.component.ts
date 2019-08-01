import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'test-component',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.less'],
})
export class TestComponent {
  @Input() fatherNum: number;
  @Output() fatherClick = new EventEmitter<number>();

  clickNum: number = 0;

  sonValue: number = 0;

  sonClick = (num: number) => {
    this.fatherClick.emit(num)
  }

  myClick = (num: number) => {
    if (num === 1) {
      this.clickNum++;
    } else if (num === 2) {
      this.clickNum--;
    }
  }

  sonValueChange = (num: number) => {
    if (num === 1) {
      this.sonValue++;
    } else if (num === 2) {
      this.sonValue--;
    }
  }

  // ngOnChanges() {
  //   console.log('ngOnChanges')
  //   // Angular（重新）设置数据绑定输入属性时的响应。该方法接收SimpleChanges当前和先前属性值的对象。
  //   // ngOnInit()在一个或多个数据绑定输入属性发生更改 之前和之后调用。
  // }

  // ngOnInit() {
  //   console.log('ngOnInit')
  //   // 在Angular首次显示数据绑定属性并设置指令 / 组件的输入属性后初始化指令 / 组件。
  //   // 在第一次之后 调用一次。 ngOnChanges()
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck')
  //   // 检测Angular无法或不会自行检测的更改并采取相应措施。
  //   // 在每次更改检测运行期间，在ngOnChanges()和之后立即调用ngOnInit() 。
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit')
  //   // 在Angular将外部内容投影到组件的视图 / 指令所在的视图后进行响应。
  //   // 在第一次之后 调用一次ngDoCheck() 。
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  //   // 在Angular检查投射到指令 / 组件中的内容后响应。
  //   // 在ngAfterContentInit()随后和随后的每一次调用之后ngDoCheck() 。
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit')
  //   // 在Angular初始化组件的视图和子视图/指令所在的视图后响应。
  //   // 在第一次之后 调用一次ngAfterContentChecked() 。
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  //   // 在Angular检查组件的视图和子视图/指令所在的视图后响应。
  //   // 在ngAfterViewInit()随后和随后的每一次调用之后ngAfterContentChecked() 。
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy')
  //   // 就在Angular破坏指令 / 组件之前进行清理。取消订阅Observable并分离事件处理程序以避免内存泄漏。
  //   // 在 Angular破坏指令 / 组件之前 调用。
  // }
}