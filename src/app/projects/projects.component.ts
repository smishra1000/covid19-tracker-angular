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
        "description":"SupraBook is the first app designed for lawyers to build, review, and share case binders digitally. SupraBook helps lawyers save time, save money, and perform better.",
        "image":"assets/img/suprabook.png",
      },
      {
        "Name":"Mary Crowly",
        "description":"Mary Crowley Cancer Research is a specialized clinical research center that offers access to new investigational therapies through the administration of Phase I and II clinical trials.",
        "image":"assets/img/marycrowly.png",
      },
      {
        "Name":"Lexipol",
        "description":"Our online Knowledge Management System (KMS) provides electronic policy acknowledgment tracking, automatic archiving of policy versions and efficient distribution of policies and training to staff",
        "image":"assets/img/lexipol.png",
      },
      {
        "Name":"Menzies Client Portal",
        "description":"Menzies LLP is an accountancy firm delivering traditional accounting services combined with strategic commercial thinking. Our services include tax, audit, business recovery as well as a business & financial advisory services proven to add value and help your business to grow.",
        "image":"assets/img/menzies.jpeg",
      }
    ]
  }

}
