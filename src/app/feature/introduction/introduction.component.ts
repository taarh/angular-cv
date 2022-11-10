import { Component, OnInit } from '@angular/core';
import { Identity } from 'src/app/core/identity';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css'],
})
export class IntroductionComponent implements OnInit {
  identity: Identity = null;
  constructor() {}

  ngOnInit() {
    this.identity = {
      name: 'Taoufik',
      prenom: 'ARHALAI',
      addresse: 'Rue capitaine',
    };
  }
}
