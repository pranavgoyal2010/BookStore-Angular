import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { BookstoreheaderComponent } from './components/bookstoreheader/bookstoreheader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule
import { MatTooltipModule } from '@angular/material/tooltip';
import { DisplaybookComponent } from './components/displaybook/displaybook.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BookscontainerComponent } from './components/bookscontainer/bookscontainer.component';
import { QuickviewComponent } from './components/quickview/quickview.component';

@NgModule({
  declarations: [
    AppComponent,    
    SignupComponent,
    SigninComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    BookstoreheaderComponent,
    DisplaybookComponent,
    DashboardComponent,
    BookscontainerComponent,
    QuickviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
