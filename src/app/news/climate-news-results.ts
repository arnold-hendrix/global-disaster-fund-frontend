import { IClimateNews } from './climate-news';

export interface IClimateNewsResults {
  status: string;
  totalResults: number;
  articles: Array<IClimateNews>;
}
