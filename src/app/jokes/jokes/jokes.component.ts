import { Component, OnInit } from '@angular/core';

import { JokesService } from './jokes/service';
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(private jokes: JokesService) { }

  ngOnInit() {
  }

  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}
