import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tabbar-component',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent {
  constructor(public router: Router) { }
  TabbarList = TabbarList;

  ngOnInit(): void {
    this.TabbarList.forEach(d => {
      if (window.location.pathname.indexOf(d.link) !== -1) {
        d.checked = true;
      } else {
        d.checked = false;
      }
    })
  }

  gogogo = (item) => {
    this.router.navigate([item.link]);
  }

}

const TabbarList = [
  Object.defineProperties({}, {
    key: {
      value: 'home',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    name: {
      value: '首页',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    link: {
      value: '/home',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    icon: {
      value: '/assets/images/timg.jpg',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    checked: {
      value: false,
      writable: true,
      enumerable: true,
      configurable: true,
    }
  }),
  Object.defineProperties({}, {
    key: {
      value: 'collect',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    name: {
      value: '收藏',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    link: {
      value: '/collect',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    icon: {
      value: '/assets/images/timg.jpg',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    checked: {
      value: false,
      writable: true,
      enumerable: true,
      configurable: true,
    }
  }),
  Object.defineProperties({}, {
    key: {
      value: 'center',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    name: {
      value: '我的',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    link: {
      value: '/center',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    icon: {
      value: '/assets/images/timg.jpg',
      writable: false,
      enumerable: true,
      configurable: false,
    },
    checked: {
      value: false,
      writable: true,
      enumerable: true,
      configurable: true,
    }
  }),
]