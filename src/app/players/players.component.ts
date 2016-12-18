import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css'],
    providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
    allPlayers: Player[] = [];
    newPlayerName: string = '';

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        this.playerService.getAllPlayers()
            .then(allPlayers => this.allPlayers = allPlayers);
    }

    addPlayer() {
        this.playerService.addPlayer(
            {
                name: this.newPlayerName,
                selected: true
            }
        );
        this.newPlayerName = '';
    }

    updatePlayers() {
        this.playerService.updatePlayers(this.allPlayers);
    }
}
