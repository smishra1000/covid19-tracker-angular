import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  toggle=false;
  logo:any;
  constructor() { 
    this.logo="assets/img/sameerlogo.jpg";
  }

  ngOnInit() {
  }
  toggleSideBar(event) {
    event.stopPropagation();
    this.toggle = !this.toggle;
  }

}
