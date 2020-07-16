import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'ec-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	alert;
	// @ViewChild('formNews') form;
	// @ViewChild('buttonNews') button;
	// @ViewChild('emailNews') email;

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
		// const form = $('#mc-embedded-subscribe-form'); // contact form

		// form.on('submit', (e) => {
		// 	e.preventDefault(); // prevent default form submit
		// 	// console.log(this.form);
		// 	const email = this.email.nativeElement.value;
		// 	this.button = this.button.nativeElement;
		// 	this.form = this.form.nativeElement;
		// 	this.http.post('https://cors-anywhere.herokuapp.com/https://us4.api.mailchimp.com/3.0/lists/344631/members',
		// 	{ emailAddress: 'hfsk@gmail.com', status: 'unsubscribed' },
		// 	{
		// 		headers: {
		// 			Authorization: 'auth d14931bfc2e48d05e32e259252ba2e61-us4'
		// 		}
		// 	})
		// 		.subscribe(res => {
		// 			console.log(res);
		// 		}, err => {
		// 			console.log(err);
		// 		});
		// });
	}

}
