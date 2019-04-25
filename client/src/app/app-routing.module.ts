import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { AnonymousGuard } from './guard/anonymous.guard';
import { ExaminationsComponent } from './examinations/examinations.component';
import { ExaminationDetailComponent } from './examination-detail/examination-detail.component';
import { ExaminationAddComponent } from './examination-add/examination-add.component';
import { ExaminationEditComponent } from './examination-edit/examination-edit.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'examinations',
    component: ExaminationsComponent,
    data: { title: 'Badania' }
  },
  {
    path: 'examination-details/:id',
    component: ExaminationDetailComponent,
    data: { title: 'Szczegóły badań' }
  },
  {
    path: 'examination-add',
    component: ExaminationAddComponent,
    data: { title: 'Nowe badanie' }
  },
  {
    path: 'examination-edit/:id',
    component: ExaminationEditComponent,
    data: { title: 'Edycja badania' }
  },
  {
    path: '',
    component: PublicComponent,
    pathMatch: 'full',
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
