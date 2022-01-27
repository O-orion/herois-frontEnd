/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1 ,
    name:'José'
  }

  constructor() { }

 
  ngOnInit(): void {}

}
