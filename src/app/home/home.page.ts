import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdCigarrosPorDia = 0;
  qtdAnos = 0;

  minutosperdidos = 0;
  horasperdidas = 0;
  diasperdidos = 0;
  mesesperdidos = 0;
  anosperdidos = 0;

  resultado = '';

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
    const tempofumado = this.qtdAnos * 360;

    this.minutosperdidos = tempofumado * 10;

    this.horasperdidas = this.minutosParaHoras(this.minutosperdidos);

    this.diasperdidos = this.horasParaDias(this.horasperdidas);

    this.mesesperdidos = this.diasParaMeses(this.diasperdidos);

    this.anosperdidos = this.mesesParaAno(this.mesesperdidos);

    const mi = this.minutosperdidos % 60;
    const h = this.horasperdidas % 24;
    const d = this.diasperdidos % 30;
    const me = this.mesesperdidos % 12;

    this.resultado =
      this.anosperdidos +
      ' anos, meses ' +
      me +
      ', dias ' +
      d +
      ', horas ' +
      h +
      ' e minutos ' +
      mi;
  }
}
