import { Component } from '@angular/core';
import {
  api_accesstoken,
} from '../../shared/services/utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'center-page-component',
  templateUrl: './center-page.component.html',
  styleUrls: ['./center-page.component.less']
})
export class CenterPageComponent {
  constructor(private http: HttpClient) {

  }
  token: string = null;
  avatar_url: string = null;
  loginname: string = null;

  ngOnInit(): void {
    this.avatar_url = localStorage.WM_avatar_url;
    this.loginname = localStorage.WM_loginname;
  }

  handleLoginClick = function () {
    this.http.post(api_accesstoken, {
      accesstoken: this.token
    }, {
        headers: {
          'content-type': 'application/json'
        }
      }
    ).subscribe(json => {
      if (json.success) {
        localStorage.WM_avatar_url = json.avatar_url;
        localStorage.WM_id = json.id;
        localStorage.WM_loginname = json.loginname;
        localStorage.WM_token = this.token;
        this.avatar_url = localStorage.WM_avatar_url;
        this.loginname = localStorage.WM_loginname;
      }
    }, (err) => {
      alert(err.error.error_msg)
    })
  }
}
