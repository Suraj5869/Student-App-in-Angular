import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  studentId: any;
  studentData: any;
  oldStudentForm = new FormGroup({
    rollNo: new FormControl(),
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl(),
    date: new FormControl(),
    isMale: new FormControl()
  });

 constructor(private studentService: StudentService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router){
  }

 ngOnInit(): void {
  this.studentId = this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(this.studentId).subscribe((data:any) => {
      this.studentData = data[0];
      console.log(this.studentData);

      this.oldStudentForm.patchValue({
        rollNo: this.studentData.rollNo,
        name: this.studentData.name,
        age: this.studentData.age,
        email: this.studentData.email,
        date: this.studentData.date,
        isMale: this.studentData.isMale
      });
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
