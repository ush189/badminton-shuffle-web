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
}