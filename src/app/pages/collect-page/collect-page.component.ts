import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  api_topics,
  api_topic_collect,
} from '../../shared/services/urls';


@Component({
  selector: 'collect-page-component',
  templateUrl: './collect-page.component.html',
  styleUrls: ['./collect-page.component.less']
})
export class CollectPageComponent {
  constructor(private http: HttpClient) { }
  loginname: string = null;
  collectList: object[] = null;

  fetchCollectList: async function() {
    if (!this.loginname) {
      Toast.fail("请先登录");
      return;
    }
    let data = await fetch(`${api_topic_collects}/${this.loginname}`);
    if (data) {
      this.collectList = data;
    }
  },


  handleDeCollectClick: async function(id) {
    let params = {
      accesstoken: localStorage.WM_token,
      topic_id: id
    };
    let success = await fetch(api_topic_de_collect, {
      method: "post",
      body: JSON.stringify(params),
      returnBoolean: true
    });
    if (success) {
      Toast.success("取消收藏成功");
    }
    this.fetchCollectList();
  }

}
