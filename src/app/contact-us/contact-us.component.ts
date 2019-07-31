import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  latitude = 17.337847 ;
  longitude = 76.804794 ;

  constructor() { }

  ngOnInit() {
  }

}
