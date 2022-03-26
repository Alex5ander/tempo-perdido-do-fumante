import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qtdCigarrosPorDia : number = 0;
  qtdAnos : number = 0;
  temporestante: string = "";

  constructor() {}



  minutosParaHoras(minutos: number) {
    return Math.floor(minutos / 60);
  }

  horasParaDias(horas: number) {
    return Math.floor(horas / 24);
  }

  diasParaMeses(dias: number) {
    return Math.floor(dias / 30);
  }

  mesesParaAno(meses: number) {
    return Math.floor(meses / 12);
  }

  calcularTempoRestante() {
    let diasFumados = this.qtdAnos * 360;
    let minutosFumados = diasFumados * 10;
    
    let horas = this.minutosParaHoras(minutosFumados);

    let dias = this.horasParaDias(horas);

    let meses = this.diasParaMeses(dias);

    let anos = this.mesesParaAno(meses);

    console.log(" horas "+horas);
    console.log(" dias "+dias);
    console.log(" meses "+meses);
    console.log(" anos "+anos);
  }

}
