//BadURL Page
import { Component } from '@angular/core';

@Component ({
	template: `
				<h3> Bad URL Page </h3>
				<p> Bad URL detected ...</p>
				<button routerLink = "/"> Home Page </button>
			  `
})
export class BadURLComponent {
	
}