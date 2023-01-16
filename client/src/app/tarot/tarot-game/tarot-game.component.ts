import { Component } from '@angular/core';

@Component({
  selector: 'app-tarot-game',
  templateUrl: './tarot-game.component.html',
  styleUrls: ['./tarot-game.component.css']
})
export class TarotGameComponent {
  players:number;
  constructor() {
    this.players = 0;
  }

  addPlayer(){
    let input = document.createElement('input');
    input.size = 30;
    input.className = "playerSelect";
    input.type = "text";
    input.style.display = "block";
    input.style.margin = "10pt auto";


    let div = document.getElementById("players");
    div.appendChild(input);
    if(div.children.length == 4){
      document.getElementById("btn").remove();
    }
  }
  makeTable() {
    let div = document.getElementById("players");

    let players = div.children.length;
    let names = [];
    for (let i = 0; i < players; i++) {
      names.push((<HTMLInputElement>div.children[i]).value);
    }

  }
  getData() {
    const bg = document.createElement("div");
    bg.id = "bg";
    bg.style.position = "absolute";
    bg.style.top = "5%";
    bg.style.left = "10%";
    bg.style.width = "80%";
    bg.style.height = "80%";
    bg.style.transition= "all 1s";
    bg.style.backgroundColor = "#f44336";
    document.getElementById("game").appendChild(bg);

    const title = document.createElement("h1");
    title.style.marginTop = "20pt";
    title.style.color = "white";
    title.innerHTML = "Round End"
    bg.appendChild(title);

    const btn = document.createElement("span");
    btn.style.color = "#f44336";
    btn.style.backgroundColor = "white";
    btn.innerHTML = "Done";
    btn.className = "spn";
    btn.onclick = () => this.setData();
    bg.appendChild(btn);

  }
  setData() {
    document.getElementById("bg").remove();
  }
}
