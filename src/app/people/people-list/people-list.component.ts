import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public people: Person[];
  constructor(private apiService: ApiService) {
    this.apiService.people.subscribe(people => this.people = people);
  }

  ngOnInit() {
  }

}
