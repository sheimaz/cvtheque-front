import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CvComponent } from './cv/cv.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CvComponent,
    ResumeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatDividerModule,
    MatSidenavModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
