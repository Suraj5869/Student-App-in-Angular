import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {
    path: '',
    component:StudentListComponent // Redirect to 'addNewStudent' when navigating to the root path (/)
  },
  {
  path:"addNewStudent",
  component: StudentFormComponent
  },
  {
    path:'updateStudent/:id',
    component: UpdateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
