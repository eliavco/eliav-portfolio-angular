import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ec-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	alert;

	constructor() { }

	ngOnInit(): void {
		const form = $('#mc-embedded-subscribe-form'); // contact form
		const submit = $('.sub-btn'); // submit button

		form.on('submit', (e) => {
			e.preventDefault(); // prevent default form submit

			$.ajax({
				url: 'mail.php', // form action url
				type: 'POST', // form submit method get/post
				dataType: 'html', // request type html/json/xml
				data: form.serialize(), // serialize form data
				beforeSend: () => {
					submit.html('Sending....'); // change submit button text
				},
				success: (data) => {
					this.alert = data;
					form.trigger('reset'); // reset form
				},
				error: (ev) => {
					console.log(ev);
				}
			}); // TODO: fix non working mail php and all components and scripts and styles and delete the unnecessary css to scss
		});
	}

}
