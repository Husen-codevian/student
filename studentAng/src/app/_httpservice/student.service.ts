import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BaseUrl: string;

  constructor(private http: HttpClient) {
    this.BaseUrl = environment.BaseUrl;
  }

  addStudent(data: any) {
    return this.http.post<any>(this.BaseUrl + 'addStudent', data).pipe(map(res => {
      return res;
    }));
  }

  getStudents() {
    return this.http.get<any>(this.BaseUrl + 'getStudents').pipe(map(res => {
      return res;
    }));
  }
}
