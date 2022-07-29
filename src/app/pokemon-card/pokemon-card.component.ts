import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  @Input()
  pokemon!:string;

  @Input()
  id!: number;

  pegarImagemPokemon(){
    const numeroFormatado = this.zerosAntes(this.id);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  zerosAntes(str: string | number, size = 3): string{
    let s = String(str);
    while (s.length<(size || 2)){
      s = '0' + s;
    }
    return s;
  }
}
