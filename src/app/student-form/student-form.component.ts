import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  newStudentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  })
  constructor(private studentService:StudentService, private router:Router) { }

  addNewStudent(){
    this.studentService.addStudent(this.newStudentForm.value).subscribe((data)=>{
      this.newStudentForm.reset();
      alert('Student Added successfully:');
      this.router.navigate(['']);
    })
  }
}
