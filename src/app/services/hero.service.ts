import { heroes } from './../heroes-list';
import { Hero } from './../hero.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroesList: Observable<Hero[]> = of(heroes)

    return heroesList;
  }
  constructor() { }
}
