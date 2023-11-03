import { Component } from '@angular/core';
import { contacts } from '../../mock/contacts';
import { Contact } from '../../models/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  contacts: Contact[] = contacts;
}
