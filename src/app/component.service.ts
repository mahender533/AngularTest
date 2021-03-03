import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComponentService {

  constructor(private http: HttpClient) { }

}
