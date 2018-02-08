import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { RegisterComponent } from './register/register.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MediaService} from './services/mediaservice.service';
import { UploadComponent } from './upload/upload.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    RegisterComponent,
    TopBarComponent,
    LogoutComponent,
    LoginComponent,
    UploadComponent,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
