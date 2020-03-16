import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefinitionComponent } from './definition/definition.component';
import { ActivityComponent } from './activity/activity.component';


const routes: Routes = [
  {path:'definition',component:DefinitionComponent},
  {path:'activity',component:ActivityComponent},
  // {path:'',redirectTo:'/activity',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
