import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  imagePath:any;
  projects:any [];
  constructor() { 
  this.imagePath="assets/img/rsp.jpeg"
  }

  ngOnInit() {
    this.projects=[
      {
        "Name":"Ready Set Pour",
        "description":"The Ready Set Pour app connects contractors with ready mixed concrete suppliers for quotes, confirmation, and scheduling of concrete projects",
        "image":"assets/img/rsp.jpeg",
      },
      {
        "Name":"SupraBook",
        "description":"The Ready Set Pour app connects contractors with ready mixed concrete suppliers for quotes, confirmation, and scheduling of concrete projects",
        "image":"assets/img/suprabook.png",
      },
      {
        "Name":"Mary Crowly",
        "description":"The Ready Set Pour app connects contractors with ready mixed concrete suppliers for quotes, confirmation, and scheduling of concrete projects",
        "image":"assets/img/marycrowly.png",
      },
      {
        "Name":"Lexipol",
        "description":"The Ready Set Pour app connects contractors with ready mixed concrete suppliers for quotes, confirmation, and scheduling of concrete projects",
        "image":"assets/img/lexipol.png",
      },
      {
        "Name":"Menzies Client Portal",
        "description":"The Ready Set Pour app connects contractors with ready mixed concrete suppliers for quotes, confirmation, and scheduling of concrete projects",
        "image":"assets/img/menzies.jpeg",
      }
    ]
  }

}
