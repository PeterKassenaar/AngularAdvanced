// country service - fetching country information from
// movie.service.ts - a generic service for
// talking to the OMDb API - fetching movie information by keyword
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {Country} from "../models/country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // My private key. Sign up for your own key at www.omdbapi.com
  url: string = 'https://restcountries.com/v2/name/';

  // inject HttpClient
  constructor(private http: HttpClient) {

  }

  // Return all movies. Read the documentation on parameters at www.omdbapi.com
  searchCountries(keyword: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}${keyword}`);
  }

  private readonly COUNTRY_DATA: Country[] =
    [
      {
      "name": "Belarus",
      "topLevelDomain": [".by"],
      "alpha2Code": "BY",
      "alpha3Code": "BLR",
      "callingCodes": ["375"],
      "capital": "Minsk",
      "altSpellings": ["BY", "Bielaruś", "Republic of Belarus", "Белоруссия", "Республика Беларусь", "Belorussiya", "Respublika Belarus’"],
      "subregion": "Eastern Europe",
      "region": "Europe",
      "population": 9398861,
      "latlng": [53.0, 28.0],
      "demonym": "Belarusian",
      "area": 207600.0,
      "gini": 25.3,
      "timezones": ["UTC+03:00"],
      "borders": ["LVA", "LTU", "POL", "RUS", "UKR"],
      "nativeName": "Белару́сь",
      "numericCode": "112",
      "flags": {"svg": "https://flagcdn.com/by.svg", "png": "https://flagcdn.com/w320/by.png"},
      "currencies": [{"code": "BYN", "name": "New Belarusian ruble", "symbol": "Br"}, {
        "code": "BYR",
        "name": "Old Belarusian ruble",
        "symbol": "Br"
      }],
      "languages": [{
        "iso639_1": "be",
        "iso639_2": "bel",
        "name": "Belarusian",
        "nativeName": "беларуская мова"
      }, {"iso639_1": "ru", "iso639_2": "rus", "name": "Russian", "nativeName": "Русский"}],
      "translations": {
        "br": "Belarus",
        "pt": "Bielorrússia",
        "nl": "Wit-Rusland",
        "hr": "Bjelorusija",
        "fa": "بلاروس",
        "de": "Weißrussland",
        "es": "Bielorrusia",
        "fr": "Biélorussie",
        "ja": "ベラルーシ",
        "it": "Bielorussia",
        "hu": "Fehéroroszország"
      },
      "flag": "https://flagcdn.com/by.svg",
      "regionalBlocs": [{"acronym": "EEU", "name": "Eurasian Economic Union", "otherAcronyms": ["EAEU"]}],
      "cioc": "BLR",
      "independent": true
    }, {
      "name": "Belgium",
      "topLevelDomain": [".be"],
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "callingCodes": ["32"],
      "capital": "Brussels",
      "altSpellings": ["BE", "België", "Belgie", "Belgien", "Belgique", "Kingdom of Belgium", "Koninkrijk België", "Royaume de Belgique", "Königreich Belgien"],
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 11555997,
      "latlng": [50.83333333, 4.0],
      "demonym": "Belgian",
      "area": 30528.0,
      "gini": 27.2,
      "timezones": ["UTC+01:00"],
      "borders": ["FRA", "DEU", "LUX", "NLD"],
      "nativeName": "België",
      "numericCode": "056",
      "flags": {"svg": "https://flagcdn.com/be.svg", "png": "https://flagcdn.com/w320/be.png"},
      "currencies": [{"code": "EUR", "name": "Euro", "symbol": "€"}],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }, {"iso639_1": "fr", "iso639_2": "fra", "name": "French", "nativeName": "français"}, {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "br": "Belgia",
        "pt": "Bélgica",
        "nl": "België",
        "hr": "Belgija",
        "fa": "بلژیک",
        "de": "Belgien",
        "es": "Bélgica",
        "fr": "Belgique",
        "ja": "ベルギー",
        "it": "Belgio",
        "hu": "Belgium"
      },
      "flag": "https://flagcdn.com/be.svg",
      "regionalBlocs": [{"acronym": "EU", "name": "European Union"}],
      "cioc": "BEL",
      "independent": true
    }, {
      "name": "Belize",
      "topLevelDomain": [".bz"],
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ",
      "callingCodes": ["501"],
      "capital": "Belmopan",
      "altSpellings": ["BZ"],
      "subregion": "Central America",
      "region": "Americas",
      "population": 397621,
      "latlng": [17.25, -88.75],
      "demonym": "Belizean",
      "area": 22966.0,
      "gini": 53.3,
      "timezones": ["UTC-06:00"],
      "borders": ["GTM", "MEX"],
      "nativeName": "Belize",
      "numericCode": "084",
      "flags": {"svg": "https://flagcdn.com/bz.svg", "png": "https://flagcdn.com/w320/bz.png"},
      "currencies": [{"code": "BZD", "name": "Belize dollar", "symbol": "$"}],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {"iso639_1": "es", "iso639_2": "spa", "name": "Spanish", "nativeName": "Español"}],
      "translations": {
        "br": "Belize",
        "pt": "Belize",
        "nl": "Belize",
        "hr": "Belize",
        "fa": "بلیز",
        "de": "Belize",
        "es": "Belice",
        "fr": "Belize",
        "ja": "ベリーズ",
        "it": "Belize",
        "hu": "Belize"
      },
      "flag": "https://flagcdn.com/bz.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }, {
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "BIZ",
      "independent": true
    }
    ]

  getCountries(): Observable<Country[]>{
    return of(this.COUNTRY_DATA)
  }

}
