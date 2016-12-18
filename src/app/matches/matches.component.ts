import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: ['./matches.component.css'],
    providers: [PlayerService]
})
export class MatchesComponent implements OnInit {
    selectedPlayers: Player[] = [];
    shuffledPlayers: Player[] = [];

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        this.refreshSelectedPlayers();
    }

    init() {
        this.refreshSelectedPlayers();
    }

    refreshSelectedPlayers() {
        this.playerService.getAllSelectedPlayers()
            .then(selectedPlayers => this.selectedPlayers = selectedPlayers);
    }

    shuffle() {
        this.shuffledPlayers = this.shuffleArray(this.selectedPlayers.slice(0));
    }

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}