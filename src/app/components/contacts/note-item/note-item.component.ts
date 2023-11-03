import { Component, Input } from '@angular/core';

interface Note {
  date: string;
  description: string;
  id: number;
  pinned: boolean;
  title: string;
}

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
})
export class NoteItemComponent {
  @Input() note?: Note;
}
