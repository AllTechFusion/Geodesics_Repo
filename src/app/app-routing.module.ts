import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GeodesicsSurveyComponent } from './geodesics-survey/geodesics-survey.component';
import { GeodesicsComponent } from './geodesics/geodesics.component';
import { TableCompComponent } from './table-comp/table-comp.component';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';

const routes: Routes = [
  {
    path:'',redirectTo:'geodesics',pathMatch:'full'
  }
  ,
{
  path:'test1' ,component:TestOneComponent
},
{
  path:'test2',component:TestTwoComponent
},
{
  path:'table',component:TableCompComponent
},
{
  path:'geodesicsSurvey',component:GeodesicsSurveyComponent
},
{
  path:'geodesics',component:GeodesicsComponent
},
{
  path:'admin',component:AdminComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
