// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  form: FormGroup;
  imc: number;
  classificacao: string;
  bsClasse: String = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      peso: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
      altura: ['', [Validators.required, Validators.min(0.01), Validators.max(3)]]
    });
  }

  calcularIMC() {
    const peso = this.form.get('peso').value;
    const altura = this.form.get('altura').value;
    this.imc = peso / (altura * altura);
    this.classificacao = this.getClassificacao(this.imc);
  }

  getClassificacao(imc: number): string {
    if (imc < 18.5) {
      this.bsClasse = 'alert alert-warning'
      return 'Magreza';
    } else if (imc < 25) {
      this.bsClasse = 'alert alert-success'
      return 'Normal';
    } else if (imc < 30) {
      this.bsClasse = 'alert alert-warning'
      return 'Sobrepeso';
    } else if (imc < 35) {
      this.bsClasse = 'alert alert-danger'
      return 'Obesidade Grau I';
    } else if (imc < 40) {
      this.bsClasse = 'alert alert-danger'
      return 'Obesidade Grau II (severa)';
    } else {
      this.bsClasse = 'alert alert-danger'
      return 'Obesidade Grau III (mórbida)';
    }
  }

}
