import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  api_topic_collects,
  api_topic_de_collect,
} from '../../shared/services/urls';


@Component({
  selector: 'collect-page-component',
  templateUrl: './collect-page.component.html',
  styleUrls: ['./collect-page.component.less']
})
export class CollectPageComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  loginname: string = null;
  collectList: object[] = null;

  ngOnInit(): void {
    this.loginname = localStorage.WM_loginname;
    this.fetchCollectList();
  }

  fetchCollectList = async function () {
    if (!this.loginname) {
      alert('请先登录');
      return;
    }
    this.http.get(`${api_topic_collects}/${this.loginname}`)
      .subscribe(json => {
        if (json.success) {
          this.collectList = json.data;
        }
      }, err => {
        alert(err.error.error_msg);
      })
  };


  handleDeCollectClick = async function (id) {
    let params = {
      accesstoken: localStorage.WM_token,
      topic_id: id
    };
    this.http.post(api_topic_de_collect, params, {
      headers: {
        'content-type': 'application/json',
      }
    }).subscribe(json => {
      if (json.success) {
        alert('取消收藏成功');
      } else {
        alert('取消收藏失败');
      }
      this.fetchCollectList();
    }, err => {
      alert(err.error.error_msg);
    })
  }

  onWrapClick = (id) => {
    this.router.navigate([`/article/${id}`]);
  }

}
