import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ClimateNewsService } from './news/climate-news-service';
import { IClimateNews } from './news/climate-news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  faCircleChevronLeft = faCircleChevronLeft;
  faCircleChevronRight = faCircleChevronRight;
  climateNews!: IClimateNews[];
  climateNewsSub!: Subscription;
  errorMessage = '';
  title = 'Global Disaster Fund';
  currentYear: number = new Date().getFullYear();

  constructor(private climateNewsService: ClimateNewsService) {}

  ngOnInit() {
    if (this.climateNewsService.climateNews) {
      this.climateNews = this.climateNewsService.climateNews;
    } else {
      this.getclimateNewsResults();
    }
  }

  getclimateNewsResults() {
    this.climateNewsSub = this.climateNewsService.getClimateNews().subscribe({
      next: (news) => {
        var results = news;
        this.climateNews = this.getClimateNews(results);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  getClimateNews(newsResults: IClimateNews []): IClimateNews[] {
    var results: IClimateNews[] = [];
    var articles = newsResults;
    for (var article of articles) {
      if (article.content && article.urlToImage && article.description) {
        results.push(article);
      }
    }
    this.climateNewsService.climateNews = results;
    return results;
  }

  ngOnDestroy() {
    this.climateNewsSub.unsubscribe();
  }
}
