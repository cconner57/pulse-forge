import { NgModule } from '@angular/core';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { ErrorComponent } from './pages/error/error.component';
import { FileManagerComponent } from './pages/file-manager/file-manager.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { MoneyComponent } from './pages/money/money.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { TaskBoardComponent } from './pages/task-board/task-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'Notes',
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
