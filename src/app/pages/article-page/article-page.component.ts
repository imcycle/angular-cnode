import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  api_topic_id,
} from '../../shared/services/urls';


@Component({
  selector: 'article-page-component',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.less']
})
export class ArticlePageComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }
  id: string = null;
  article: any = null;


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.fetchArticleData();
  }

  fetchArticleData = async function () {
    this.http.get(`${api_topic_id}/${this.id}?mdrender=true`)
      .subscribe(json => {
        if (json.success) {
          this.article = json.data;
        }
      })
  }



}
