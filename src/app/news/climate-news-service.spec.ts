import { TestBed } from '@angular/core/testing';

import { ClimateNewsService } from './climate-news-service';

describe('ClimateNewsServiceService', () => {
  let service: ClimateNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimateNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
