import { Component, OnInit } from '@angular/core';

declare const Waypoint;

@Component({
	selector: 'ec-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		const waypoint = new Waypoint({
			element: document.getElementById('welcome_area'),
			handler: () => {
				const prBars = $('.progress-bar');
				Array.from(prBars).forEach(prBar => {
					prBar.style.width = `${prBar.getAttribute('aria-valuenow')}%`;
				});
			},
			offset: '55%'
		});
	}

}
