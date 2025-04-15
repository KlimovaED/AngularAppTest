import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PackageComponent} from '../packages/package/package.component';
import {PackagesComponent} from '../packages/packages.component';
import {FormSearchComponent} from '../form-search/form-search.component';
import {SortButtonsComponent} from '../sort-buttons/sort-buttons.component';
import {FilterSort} from '../../models/pascages';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PackageComponent, PackagesComponent, FormSearchComponent,SortButtonsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled';
  searchText: string = ''



  onSearchInput(value: string): void {
    this.searchText = value;
    this.todolistsComponent.filter = value;
    this.todolistsComponent.filterPackages();
  }

  changeSort(sortBy:FilterSort){
this.todolistsComponent.sortByForPascages(sortBy)
  }


  onReload() {
    this.searchText = '';
 this.todolistsComponent.refreshTodos();
  }

  @ViewChild(PackagesComponent) todolistsComponent!: PackagesComponent;
}
