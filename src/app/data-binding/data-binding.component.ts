import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'tonyarthur.github.io';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/g/400/200/';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: string = "abcd";

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado(){
    alert("clicou");
  }
  onKeyUp(evento: KeyboardEvent ){
    this.valorAtual = (<HTMLInputElement> evento.target).value
  }
  SalvarValor(valor){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  pessoa: any = {
    nome: "Tony",
    idade: 25
  }
  constructor() { }

  ngOnInit() {
  }

}
