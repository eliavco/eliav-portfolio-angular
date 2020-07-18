import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'ec-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
	projects = [
		{
			title: 'Omnifood', description: 'Demo restaurant -responsive',
			img: 'assets/img/gallery/omnifood.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/omnifood`,
			classes: ['fe', ]
		},
		{
			title: 'Budgety', description: 'Demo savings app -unresponsive',
			img: 'assets/img/gallery/budgety.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/budgety`,
			classes: ['fe', ]
		},
		{
			title: 'Pig Game', description: 'A simple online luck game -unresponsive',
			img: 'assets/img/gallery/pig.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/pig`,
			classes: ['fe', ]
		},
		{
			title: 'Natours - frontend', description: 'Demo tours company -responsive',
			img: 'assets/img/gallery/natours-f.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/natours`,
			classes: ['fe', ]
		},
		{
			title: 'Forkify', description: 'Recipes website -unresponsive',
			img: 'assets/img/gallery/forkify.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/forkify`,
			classes: ['fe', 'api']
		},
		{
			title: 'Trello', description: 'Demo hotel booking app -responsive',
			img: 'assets/img/gallery/trello.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/trello`,
			classes: ['fe', ]
		},
		{
			title: 'Nexter', description: 'Demo realtor app -responsive',
			img: 'assets/img/gallery/nexter.jpg',
			location: `${environment.portfolioSiteRoot}eliavco/nexter`,
			classes: ['fe', ]
		},
		{
			title: 'Natours - backend', description: 'Demo tours company -unresponsive',
			img: 'assets/img/gallery/natours-b.jpg',
			location: `${environment.portfolioSiteRoot}go`,
			classes: ['fe', 'api', 'fs', ]
		},
		{
			title: 'Natours - mobile', description: 'Demo tours company',
			img: 'assets/img/gallery/natours-m.png',
			location: 'https://play.google.com/store/apps/details?id=com.eliavco.natoursmob',
			classes: ['fe', 'api', 'rn', ]
		},
		{
			title: 'Email', description: 'Demo (but working) email service',
			img: 'assets/img/gallery/email.png',
			location: 'https://email-cohen.web.app',
			classes: ['fe', 'api', 'ng', 'el', ]
		},
	];

	constructor() { }

	ngOnInit(): void {
		const filter = $('.gallery_filter')[0].childNodes;
		Array.from(filter).forEach((filt, i, filts) => {
			filt.addEventListener('click', (e) => {
				e.preventDefault();
				($('#filtering') as any).isotope({}).isotope({ filter: (filt as any).getAttribute('data-filter') });
				filts.forEach(fil => { (fil as any).classList.remove('active'); });
				(filt as any).classList.add('active');
			});
		});
	}

}
