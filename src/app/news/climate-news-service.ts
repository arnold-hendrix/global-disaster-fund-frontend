import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IClimateNewsResults } from './climate-news-results';
import { IClimateNews } from './climate-news';

@Injectable({
  providedIn: 'root',
})
export class ClimateNewsService {
  today: string = new Date().toISOString();
  private baseUrl = environment.testEndpoint;
  private params = {
    q: 'climate',
    from: this.today,
    sortBy: 'popularity',
    apiKey: environment.apiKey,
  };
  private _climateNews!: IClimateNews [];

  public get climateNews(): IClimateNews [] {
    return this._climateNews;
  }

  public set climateNews(value: IClimateNews []) {
    this._climateNews = value;
  }

  constructor(private http: HttpClient) {}

  public getClimateNews(): Observable<IClimateNewsResults> {
    return this.http
      .get<IClimateNewsResults>(`${this.baseUrl}`)
      .pipe(
        tap((data) => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
