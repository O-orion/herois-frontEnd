import { Hero } from './../hero.model';
/* eslint-disable @angular-eslint/component-class-suffix */
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-hero-detail',
  templateUrl: '../hero-detail/hero-detail.component.html',
  styleUrls: ['../hero-detail/hero-detail.component.scss'],
}) //declarando nossa classe como componente do angukar

export class HeroDetail{
  //wwd
  constructor(){}

 @Input() hero?: Hero; //declrando que essa varíavel vai receber um valor vindo de outro componente
}
