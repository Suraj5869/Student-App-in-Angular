import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  studentId: any;

  oldStudentForm : FormGroup;

 constructor(private studentService: StudentService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router){
  this.oldStudentForm = this.fb.group({
    rollNo: [''],
    name: [''],
    age: [''],
    email: [''],
    date: [''],
    isMale: [false]
  });
  }

 ngOnInit(): void {
  this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.studentId).subscribe((student) => {
      console.log('Student:', student);
      

      // this.oldStudentForm.patchValue({
      //   rollNo: student.rollNo,
      //   name: student.name,
      //   age: student.age,
      //   email: student.email,
      //   date: student.date,
      //   isMale: student.isMale
      // });
    });
  
 }
 

updateStudent(){
  const formValue = this.oldStudentForm.value;
  this.studentService.updateStudent(this.studentId, formValue).subscribe(() => {
    alert('Student updated successfully:');
    this.router.navigate(['']);
  });
}


}
