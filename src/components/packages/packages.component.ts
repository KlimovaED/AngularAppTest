import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PackageComponent} from './package/package.component';
import {NgForOf} from '@angular/common';
import {FilterSort, Packeges} from '../../models/pascages';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  standalone: true,
  imports: [
    PackageComponent,
    NgForOf
  ],
  styleUrl: './packages.component.css'
})
export class PackagesComponent implements OnInit{
  @Input() searchText :string = '';
  @Input() hoveredId:string | null = null;
  todolists: Packeges[] = [];
  filteredTodolists: Packeges[] = [];
  depensies:string[] = [];
  filter:string = ''
constructor( private http: HttpClient) {
}

  onHover(id: string | null): void {
    this.hoveredId = id;
    this.gethoveredIdDependencies(this.hoveredId)
  }

  isHighlighted(id:string):boolean{
    return this.hoveredId === id
}

isHiglitedDespensies(selected:string):boolean{
  return this.depensies.includes(selected);
}

  filterPackages(): void {
    const search = this.filter.toLowerCase().trim();
console.log(search)
    this.filteredTodolists = search
      ? this.todolists.filter(todo =>
        todo.id.toLowerCase().includes(search)
      )
      : [...this.todolists];
  }

ngOnInit(): void {
  this.getTodos()
}

refreshTodos(){
  this.getTodos()
  this.filter=''
  }

  gethoveredIdDependencies(id:string|null){
  if(!id){return}
  const encodeId = encodeURIComponent(id)
    this.http.get<string[]>(`/api/packages/${encodeId}/dependencies`).subscribe(res=>{
      this.depensies = res
    })

  }

  getTodos(){
this.http.get<Packeges[]>('/api/packages').subscribe(res=>{
  this.todolists = res;
  this.filterPackages();
})
  }

  sortByForPascages(sortBy:FilterSort){
    const statePackages = this.filteredTodolists

    const newPackages = statePackages.sort((a, b) =>
      sortBy === 'down'
        ? b.weeklyDownloads - a.weeklyDownloads
        : a.weeklyDownloads - b.weeklyDownloads
    );
    console.log(newPackages)
    this.filteredTodolists = newPackages;
  }

}
