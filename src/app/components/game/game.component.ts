import { Component } from '@angular/core';
import { GameService } from '../../shared/services/game.service';
import { NgIf, NgFor } from '@angular/common';
import { HighlightPlayerDirective } from '../../directives/highlight-player.directive';
import { PlayerNamePipe } from '../../pipes/player-name.pipe';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ PlayerNamePipe, HighlightPlayerDirective, NgIf, NgFor],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',

})
export class GameComponent {
  board!: string[][];
  currentPlayer!: string;
  winner: string = '';


  constructor(public gameService: GameService) {

  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(): void {
    this.gameService.resetGame();
    this.updateGame();
  }

  makeMove(row: number, col: number): void {
    this.gameService.makeMove(row, col);
    this.updateGame();
   
  }

  updateGame(): void {
    this.board = this.gameService.getBoard();
    this.currentPlayer = this.gameService.getCurrentPlayer();
    this.winner = this.gameService.getWinner();
   
  }
}
