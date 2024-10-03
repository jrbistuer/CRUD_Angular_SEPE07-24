import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IVacanca } from '../../model/interfaces';
import { VacancesService } from '../../services/vacances.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  testdoublebinding?: string;

  nom: string = '';
  preu: string = '';
  pais: string = '';
  descripcio: string = '';

  vacances?: IVacanca[];
  vacancaForm!: FormGroup;

  constructor(private vacancesService: VacancesService) {}

  ngOnInit(): void {
    console.log('Hello World!');
    this.getVacances();
    this.createForm();
  }

  createForm() {
    this.vacancaForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      preu: new FormControl('', [Validators.required]),
      pais: new FormControl(''),
      descripcio: new FormControl('')
    });
  }

  saveVacanca() {
    if (this.vacancaForm.valid) {
      const v: IVacanca = {
        nom: this.vacancaForm.get('nom')!.value,
        preu: +this.vacancaForm.get('preu')!.value,
        pais:  this.vacancaForm.get('pais')!.value,
        descripcio: this.vacancaForm.get('descripcio')!.value,
        actiu: true
      }
      this.vacancesService.addVacanca(v);
      this.getVacances();
    } else {
      alert('formaulario inválido');
    }
  }

  getVacances() {
    const v: IVacanca[] = this.vacancesService.getVacances();
    this.vacances = v;
  }

  editVacanca(i: number) {
    const v: IVacanca = this.vacancesService.getVacancaById(i);
    console.log(v);    
  }

  removeVacanca(i: number) {
    this.vacances = this.vacancesService.removeVacanca(i);
  }

}
