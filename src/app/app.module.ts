import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

// Pour le router
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './pages/shared/auth.guard';

const routes:Routes = [
  /*{
    path: "",
    component:AssignmentsComponent,
  },
  {
    path: "home",
    component:AssignmentsComponent
  },
  {
    path: "add",
    component:AddAssignmentComponent
  },*/
  {
    path: "user-profile/:id",
    component: UserProfileComponent
  },
]

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
