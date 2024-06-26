import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookscontainerComponent } from './components/bookscontainer/bookscontainer.component';
import { DisplaybookComponent } from './components/displaybook/displaybook.component';
import { QuickviewComponent } from './components/quickview/quickview.component';

const routes: Routes = [
  {
    path:'', component:DashboardComponent,
    children:[
      {
        path:'', component:BookscontainerComponent
      },
      {
        path:'quickview', component:QuickviewComponent
      }
    ]
  },
  {
    path: 'signin',component:SigninComponent
  },
  {
    path: 'signup', component:SignupComponent
  },
  {
    path: 'forgotpassword', component:ForgetpasswordComponent
  },
  {
    path: 'resetpassword', component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
