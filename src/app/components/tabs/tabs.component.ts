import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ec-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
	unEducations = [
		{ time: '2016 to present', title: 'Udemy.com', description: 'Python and Django' },
		{ time: 'March 2018 to present', title: 'Online Courses', description: 'Node.js:<br>Express, MongoDB, React Native, Electron' },
		{ time: 'September 2019 to present', title: 'Coursera', description: 'Economics' },
		{ time: 'September 2019 to February 2020', title: 'BrainBee', description: 'Preparing for an international competition in neuroscience' },
		{ time: 'April 2020 to present', title: 'Angular', description: 'Mastering the arts of the front-end framework' },
	];
	ofEducations = [
		{ time: 'September 2015 to present', title: 'Haifa', description: 'Studying computer science and physics at school' },
		{ time: 'September 2014 to August 2017', title: 'Bar Ilan University', description: 'Participating in an advanced math course' },
		{ time: 'September 2019 to August 2020', title: 'International Diller Teen Fellows', description: 'Leadership program for Jewish teenagers from around the world' },
		{ time: 'March 2020 to May 2020', title: 'Magen David Adom', description: 'COVID-19 telephone recpionist' },
	];

	constructor() { }

	ngOnInit(): void {
	}

}
