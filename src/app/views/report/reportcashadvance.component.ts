import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';


declare let $: any;

@Component({
    templateUrl:'reportcashadvance.component.html'
})
export class ReportCashadvanceComponent{
	date: Date;
options: DatepickerOptions = {
	minYear: 1970,
	maxYear: 2030,
	displayFormat: 'MMM D[,] YYYY',
	barTitleFormat: 'MMMM YYYY',
	dayNamesFormat: 'dd',
	firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
	locale: frLocale,
	minDate: new Date(Date.now()), // Minimal selectable date
	maxDate: new Date(Date.now()),  // Maximal selectable date
	barTitleIfEmpty: 'Click to select a date',
	placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
	addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
	addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
	fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
	useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
  };
	constructor(){
		this.date = new Date();
	}
   

  
    
}