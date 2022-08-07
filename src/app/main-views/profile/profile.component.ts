import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;
  idCharacter: string;
  character:Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: GeneralServiceService
  ) {
    this.subscriptions = new Subscription();
    this.subscriptions.add(
      this.activatedRoute.params.subscribe((params: any) => {
        this.idCharacter = params.id;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.loadCharacter();
  }

  loadCharacter() {
    this.subscriptions.add(
      this.service.getCharacter(this.idCharacter).subscribe((response) => {
        this.character = response;
      })
    );
  }
}
