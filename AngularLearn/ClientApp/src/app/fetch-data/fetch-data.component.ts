import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  private http: HttpClient;
  private apiUrl: string;
  private forecastToAdd: WeatherForecast;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.apiUrl = baseUrl + "api/SampleData/";
    this.LoadData();
    this.NewItem();
  }

  LoadData() {
    this.http.get<Object[]>(this.apiUrl + '/WeatherForecasts').subscribe(result => {
      this.forecasts = result.map(x => new WeatherForecast(x));
      this.NewItem();
    }, error => console.error(error));
  }
  SaveItem(item?: WeatherForecast) {
    this.http.post<Object[]>(this.apiUrl + '/AddWeatherForecast', item || this.forecastToAdd).subscribe(result => {
      this.forecasts = result.map(x => new WeatherForecast(x));
      this.NewItem();
    }, error => console.error(error))
  }

  NewItem() {
    this.forecastToAdd = {
      dateFormatted: null,
      temperatureC: null,
      temperatureF: null,
      summary: null
    };
  }
}

class WeatherForecast {
  dateFormatted: string;
  temperatureC?: number;
  get temperatureF(): number {
    return 32 + (this.temperatureC / 0.5556);
  }
  summary: string;

  constructor(data?: any) {
    if (data != null) {
      this.dateFormatted = data.dateFormatted;
      this.temperatureC = data.temperatureC;
      this.summary = data.summary;
    }
  }
}
