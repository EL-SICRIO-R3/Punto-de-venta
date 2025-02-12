import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { AppSettingsInterface } from '../iterfaces/settings.interface';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  private config!: AppSettingsInterface;

  constructor(private readonly http: HttpClient) { }

  /**
   * fetchConfig - Solicita y asigna las variables estáticas de la aplicación
   * definidos en el archivo settings.json correspondientes al ambiente de ejecución
   * @returns { Observable<{AppSettingsInterface}> }
   * NOTA: Estos datos se obtienen antes de cargar la aplicación en APP_INITIALIZER
   */
  public fetchConfig(): Observable<AppSettingsInterface> {
    let configSourceUrl: string = environment.configSource;
    if (configSourceUrl == '') {
      const env = environment.env.toLowerCase();
      const configFile = (env == 'prod') ? `settings.json` : `settings.${env}.json`;
      configSourceUrl = `assets/settings/${configFile}`;
    }
    return this.http
      .get<AppSettingsInterface>(configSourceUrl)
      .pipe(
        tap((settings) => this.config = settings)
      );
  }

  /**
   * getConfig - Devuelve las variables estáticas de la aplicación previamente obtenidas
   * @returns { AppSettingsInterface }
   */
  public getConfig(): AppSettingsInterface {
    return this.config;
  }

}
