import { Component } from '@angular/core';
import { notes } from '../../mock/notes';
import { Note } from '../../models/notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: Note[] = notes;
}
