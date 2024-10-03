import { Injectable } from '@angular/core';
import { IVacanca } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VacancesService {

  constructor() { }

  addVacanca(vacanca: IVacanca): boolean {
    const vacances = this.getVacances();
    vacances.push(vacanca);
    this.saveVacances(vacances);
    return true;
  }

  getVacancaById(id: number): IVacanca {
    const vacances = this.getVacances();
    return this.getVacances()[id];
  }

  getVacances(): IVacanca[] {
    return JSON.parse(localStorage.getItem('vacances')!) || [];;
  }

  removeVacanca(id: number): IVacanca[] {
    const vacances = this.getVacances();
    vacances.splice(id, 1);
    this.saveVacances(vacances);
    return this.getVacances();
  }

  private saveVacances(vacances: IVacanca[]) {
    localStorage.setItem('vacances', JSON.stringify(vacances));
  }

}
