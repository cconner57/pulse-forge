import { NgModule } from '@angular/core';
import {
  CalendarComponent,
  ChatComponent,
  ContactsComponent,
  CustomersComponent,
  DashboardComponent,
  ECommerceComponent,
  ErrorComponent,
  FileManagerComponent,
  InboxComponent,
  MoneyComponent,
  NotesComponent,
  SignInComponent,
  SignUpComponent,
  ProjectManagementComponent,
  TaskBoardComponent,
  LockComponent,
} from './pages/index';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LockComponent,
    title: 'Locked',
  },
  {
    path: 'login',
    component: SignInComponent,
    title: 'Sign in',
  },
  {
    path: 'signup',
    component: SignUpComponent,
    title: 'Sign up',
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    title: 'Calendar',
  },
  {
    path: 'chat',
    component: ChatComponent,
    title: 'Chat',
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    title: 'Contacts page',
  },
  {
    path: 'customers',
    component: CustomersComponent,
    title: 'Customers page',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard page',
  },
  {
    path: 'store',
    component: ECommerceComponent,
    title: 'Store page',
  },
  {
    path: 'files',
    component: FileManagerComponent,
    title: 'File Manager page',
  },
  {
    path: 'inbox',
    component: InboxComponent,
    title: 'Inbox page',
  },
  {
    path: 'money',
    component: MoneyComponent,
    title: 'Money page',
  },
  {
    path: 'notes',
    component: NotesComponent,
    title: 'Notes page',
  },
  {
    path: 'projects',
    component: ProjectManagementComponent,
    title: 'Project Management page',
  },
  {
    path: 'tasks',
    component: TaskBoardComponent,
    title: 'Task Board page',
  },
  {
    path: '**',
    component: ErrorComponent,
    title: '404 Error page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
