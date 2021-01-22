import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

interface HttpBaseInterface {
  getBaseUrl(): string;
}

@Injectable()
export abstract class HttpBaseService<T> implements HttpBaseInterface {
  constructor(protected http: HttpClient) {}
  abstract getBaseUrl(): string;

  public getAll(): Observable<T[]> {
    return this.http
      .get<T[]>(this.getBaseUrl())
      .pipe(map((res) => res['data']));
  }
}
