import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

// modules
import { ToolbarModule } from '@components/toolbar/module/toolbar.module';
import { UserListModule } from '@components/user-list/module/user-list.module';
import { NoUsersModule } from '@components/no-users/module/no-users.module';

// pages
import { UserComponent } from '@pages/user/user.component';

// material
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    UserListModule,
    HttpClientModule,
    NoUsersModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
