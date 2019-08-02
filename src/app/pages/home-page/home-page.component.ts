import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  api_topics,
  api_topic_collect,
} from '../../shared/services/urls';

@Component({
  selector: 'home-page-component',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  tab: string = "all";
  page: number = 1;
  limit: number = 20;
  topicList = null;

  ngOnInit(): void {
    this.fetchTopicList();
  }

  fetchTopicList = function () {
    let url: string = `${api_topics}?page=${this.page}&limit=${this.limit}&mdrender=false&tab=${this.tab}`;
    this.http.get(url).subscribe((json) => {
      if (json.success) {
        this.topicList = json.data;
      }
    }, err => {
      alert(err.error.error_msg)
    })
  }

  onWrapClick = function (id) {
    this.router.navigate([`/article/${id}`]);
  }

  handleCollectClick = function (id) {
    let params = {
      accesstoken: localStorage.WM_token,
      topic_id: id,
    };
    this.http.post(api_topic_collect, params, {
      headers: {
        'content-type': 'application/json',
      }
    }).subscribe(json => {
      if (json.success) {
        alert('收藏成功');
      } else {
        alert('收藏失败');
      }
    }, err => {
      alert(err.error.error_msg);
    })
  }


}
