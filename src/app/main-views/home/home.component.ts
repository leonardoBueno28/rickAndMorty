import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;
  characters: any;
  nextPage: string;
  searchText: string = '';
  loading: boolean = false;
  gender: string = '';
  status: string = '';

  constructor(private service: GeneralServiceService, public route: Router) {
    this.subscriptions = new Subscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.subscriptions.add(
      this.service.getCharacters().subscribe((response: any) => {
        this.characters = response.results;
        this.nextPage = response.info.next;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      })
    );
  }

  onScroll() {
    let array;
    this.subscriptions.add(
      this.service.getNextPage(this.nextPage).subscribe((response: any) => {
        array = this.characters;
        this.characters = array.concat(response.results);
        this.nextPage = response.info.next;
      })
    );
  }

  goTo(character: any) {
    this.route.navigate(['/profile', character]);
  }

  search(value?: any) {
    if (value) {
      const typeFilter = value.split(':');
      this.loading = true;
      if (typeFilter[0] === 'gender') {
        this.gender = typeFilter[1];
      }
      if (typeFilter[0] === 'status') {
        this.status = typeFilter[1];
      }
    }
    const filter =
      '?name=' +
      this.searchText +
      '&gender=' +
      this.gender +
      '&status=' +
      this.status;
    this.subscriptions.add(
      this.service.searchCharacter(filter).subscribe((response: any) => {
        this.characters = response.results;
        this.nextPage = response.info.next;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      })
    );
  }
}
