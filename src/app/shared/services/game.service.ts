// src/app/game.service.ts
import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Gameinfo } from './models/gameinfo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public gameInfo:WritableSignal<Gameinfo> =  signal({playerXWin:0, playerOWin:0, draw:0})
  public popupMessage:WritableSignal<string> = signal('')
  private board!: string[][];
  private currentPlayer!: string;
  private winner!: string ;
  private clickAudio: HTMLAudioElement | any;
  private winAudio: HTMLAudioElement | any;
  private cancelAudio: HTMLAudioElement | any;

  constructor(){
    if(typeof document !== 'undefined'){
      this.clickAudio = new Audio();
    this.clickAudio.src = '../../../assets/sounds/click.mp3';
    this.winAudio = new Audio();
    this.winAudio.src = '../../../assets/sounds/win.mp3';
    this.cancelAudio = new Audio();
    this.cancelAudio.src = '../../../assets/sounds/cancel.mp3';
  }
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = '';
    this.gameInfo.set({playerXWin:0, playerOWin:0, draw:0})
  }

  getBoard() {
    return this.board;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  getWinner() {
    return this.winner;
  }

  makeMove(row: number, col: number) {
  
    if (!this.board[row][col] && !this.winner) {
      this.clickAudio.play().catch((error:string) => console.error('Error playing click sound:', error));
      this.board[row][col] = this.currentPlayer;
      if(this.board.every(row => row.every(cell => cell !== ''))){
        this.gameInfo.update((res: Gameinfo) => ({
         ...res,
          draw: res.draw + 1,
        }));
        this.popupMessage.set("Opps it's a draw ");
      }
      if (this.checkWinner(row, col)) {
        this.winAudio.play().catch((error:string)=> console.error('Error playing win sound:', error));
        this.winner = this.currentPlayer;
        if (this.currentPlayer === 'X') {
          this.gameInfo.update((res: Gameinfo) => ({
            ...res,
            playerXWin: res.playerXWin + 1,
          }));
          this.popupMessage.set('Player X won!');
        }
        if (this.currentPlayer === 'O') {
          this.gameInfo.update((res: Gameinfo) => ({
            ...res,
            playerOWin: res.playerOWin + 1,
          }));
          this.popupMessage.set('Player O won!');
        }
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }else{
      this.cancelAudio.play().catch((error:string)=> console.error('Error playing win sound:', error));
      this.resetGame()
    }
   
  }

  private checkWinner(row: number, col: number): boolean {
    // Check row
    if (this.board[row].every(cell => cell === this.currentPlayer)) return true;

    // Check column
    if (this.board.every(row => row[col] === this.currentPlayer)) return true;

    // Check diagonals  
    if (row === col && this.board.every((_, index) => this.board[index][index] === this.currentPlayer)) return true;
    if (row + col === 2 && this.board.every((_, index) => this.board[index][2 - index] === this.currentPlayer)) return true;

    return false;
  }
}
