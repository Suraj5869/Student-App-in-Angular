import { Component, Output } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  studentData:any ='';
  /**
   *
   */
  constructor(private studentService:StudentService, private router:Router) {
    this.loadStudent();
  }

    loadStudent(){
      this.studentService.getStudents().subscribe((data)=>{
        this.studentData=data;
      })
    }
    deleteStudent(id:any){
      this.studentService.deleteStudent(id).subscribe(()=>{
        this.loadStudent();
      });
    }
    
    sendData(id:any){
      this.router.navigate(['updateStudent/'+`${id}`]);
    }
  }

