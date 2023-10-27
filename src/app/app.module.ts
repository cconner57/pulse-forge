import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { NotesComponent } from './pages/notes/notes.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { TaskBoardComponent } from './pages/task-board/task-board.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MoneyComponent } from './pages/money/money.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    ContactsComponent,
    CalendarComponent,
    NotesComponent,
    FileManagerComponent,
    ProjectManagementComponent,
    TaskBoardComponent,
    InboxComponent,
    ChatComponent,
    ECommerceComponent,
    DashboardComponent,
    MoneyComponent,
    CustomersComponent,
    RegisterComponent,
    SignInComponent,
    ForgotPasswordComponent,
    SearchbarComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
