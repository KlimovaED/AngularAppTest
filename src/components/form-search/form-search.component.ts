import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-search',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form-search.component.html',
  standalone: true,
  styleUrl: './form-search.component.css'
})
export class FormSearchComponent {
  @Input() searchText: string = ''
  @Output() search = new EventEmitter<string>();
  @Output() reload= new EventEmitter<void>();


onReload(){
  this.reload.emit();
  this.searchText = ''
}

  onSearch() {
    this.search.emit(this.searchText);
  }

}
