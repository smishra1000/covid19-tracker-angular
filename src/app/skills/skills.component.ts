import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  mySkills:any [];
  constructor() { 
    this.mySkills=[
      {
        "name":"Nodejs",
        "level":70
      },
      {
        "name":"JavaScript",
        "level":80,
      },
      {
        "name":"Angular",
        "level":80,
      },
      
      {
        "name":"Reactjs",
        "level":90,
      },
      {
        "name":"Mongodb",
        "level":70,
      },
      {
        "name":"Microservices",
        "level":70,
      },
      
    ]
  }

  ngOnInit() {
  }

}
