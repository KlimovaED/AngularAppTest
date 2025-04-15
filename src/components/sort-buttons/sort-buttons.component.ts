import {Component, EventEmitter, Output} from '@angular/core';
import {FilterSort} from '../../models/pascages';

@Component({
  selector: 'app-sort-buttons',
  imports: [],
  templateUrl: './sort-buttons.component.html',
  standalone: true,
  styleUrl: './sort-buttons.component.css'
})
export class SortButtonsComponent {

  @Output() changeSortEvent = new EventEmitter<FilterSort>();

  sortBy(value:FilterSort){
this.changeSortEvent.emit(value);
  }
}
