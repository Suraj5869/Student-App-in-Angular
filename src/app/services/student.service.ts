import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  url='http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
  constructor(private http:HttpClient) { }

  getStudents(){
    return this.http.get(this.url);
  }

  addStudent(newStudentData:any){
    return this.http.post(this.url, newStudentData);
  }

  deleteStudent(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }

  getStudent(id:any): Observable<Student>{
    const student =  this.http.get<Student>(`${this.url}/${id}`);
    return student;
  }
  updateStudent(id:any, updatedStudentData:any){
    return this.http.put(`${this.url}/${id}`, updatedStudentData);
  }
}
