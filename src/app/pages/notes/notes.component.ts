import { Component } from '@angular/core';
import { notes } from '../../mock/notes';

interface Note {
  date: string;
  description: string;
  id: number;
  pinned: boolean;
  title: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  notes: Note[] = notes;
}
