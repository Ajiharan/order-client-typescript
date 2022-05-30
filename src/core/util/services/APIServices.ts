import axios, { AxiosInstance } from "axios";

export class APIService {
  private _http: AxiosInstance;
  private _baseUrl: string;
  private _apiSection: string;

  constructor(baseUrl: string, path: string = "") {
    this._baseUrl = baseUrl;
    this._apiSection = path;
    this._http = axios.create({
      baseURL: this.baseUrl,
    });
  }
  getAll(params: any) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Cache-Control":
        "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    };
    return this.http.get(this.apiSection, { headers, params });
  }

  create(data: object) {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    return this.http.post(this.apiSection, data, { headers });
  }

  public get http(): AxiosInstance {
    return this._http;
  }

  public get baseUrl() {
    return this._baseUrl;
  }
  public get apiSection() {
    return this._apiSection;
  }

  public set apiSection(path: string) {
    this._apiSection = path;
  }
}
