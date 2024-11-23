import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(private studentService:StudentService) { }

  addNewStudent(){
    this.studentService.addStudent(this.newStudentForm.value).subscribe((data)=>{
      console.log(data);
      this.newStudentForm.reset();
    })
  }
}
