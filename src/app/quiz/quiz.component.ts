import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  test_types: any[];
  test_type: any;
  test_type1: any;
  questions: any[];
  selectedQuestion: any;
  results: any[];
  testStatus: any;
  timeleft: any;
  interval:any;
  right:any;
  wrong:any;
  attempt:any;
  total:any;

  selectedIndex: any;
  constructor() {
    this.timeleft = 600;
    this.total=0;
    this.right=0;
    this.attempt=0;
    this.wrong=0;
    this.testStatus ="start"
    this.test_type = "testLevel2";
    this.test_types = ["testLevel1", "testLevel2"];
    //this.examTimer();
    this.countdown(1);
    this.questions = [
      {
        _id: 1,
        question: "What does the acronym 'MVC' stand for?",
        type: "Multiple choice",
        choices: [
          {
            _id: 1,
            choice: "Method, Variable, Constant",
          },
          {
            _id: 2,
            choice: "Module, View, Constraint",
          },
          {
            _id: 3,
            choice: "Model, View, Controller",
          },
          {
            _id: 4,
            choice: "None of the above",
          },
        ],
        answer: 3,
      },
      {
        _id: 2,
        question: "Who maintains the AngularJS open-source project?",
        type: "Multiple choice",
        choices: [
          {
            _id: 1,
            choice: "Yahoo!",
          },
          {
            _id: 2,
            choice: "Google",
          },
          {
            _id: 3,
            choice: "AngularJS.org",
          },
          {
            _id: 4,
            choice: "Microsoft",
          },
        ],
        answer: 2,
      },
      {
        _id: 3,
        question: "In what year was AngularJS initially released?",
        type: "Multiple choice",
        choices: [
          {
            _id: 1,
            choice: "2009",
          },
          {
            _id: 2,
            choice: "2012",
          },
          {
            _id: 3,
            choice: "2006",
          },
          {
            _id: 4,
            choice: "2014",
          },
        ],
        answer: 1,
      },
    ];

    this.selectedQuestion = this.questions[0];
    this.selectedIndex = 0;
    this.createResults();
  }

  createResults = function () {
    this.results = [];
    var len = this.questions.length;
    for (var i = 0; i < len; i++) {
      this.results.push({
        _id: this.questions[i]._id,
        answer: this.questions[i].answer,
        userChoice: null,
        correct: null,
        attempt:null,
      });
    }
  };

  // used for multiple choice and true-false type questions
  checkUserChoice(question, userChoice) {
    // assign the user's choice to userChoice
    this.results[question - 1].userChoice = userChoice;

    // check the user's choice against the answer
    if (this.results[question - 1].answer === userChoice) {
      this.results[question - 1].correct = true;

    } else {
      this.results[question - 1].correct = false;
    }
    this.results[question - 1].attempt=true;
  }

  examTimer() {
    this.interval =  setInterval(() => {

      this.timeleft--;
      if(this.timeleft <= 0) {
        this.testStatus = "done";
        this.finalResult();

        clearInterval(this.interval);
      }
    },1000);
  }

  ngOnInit() {}

  finalResult() {
    this.total = this.questions.length;
   for(let i=0;i<this.results.length;i++) {
     if(this.results[i].attempt==true) {
       this.attempt++;
     }if(this.results[i].correct==true) {
       this.right++;
     }if(this.results[i].correct==false) {
       this.wrong++;
     }
   }
  }
  previous() {
    let currentIndex = this.selectedIndex;
    let newIndex =
      currentIndex === 0 ? this.questions.length - 1 : currentIndex - 1;
    this.selectedQuestion = this.questions[newIndex];
    this.selectedIndex = newIndex;
  }

  next() {
    let currentIndex = this.selectedIndex;
    let newIndex =
      currentIndex === this.questions.length ? 0 : currentIndex + 1;
    this.selectedQuestion = this.questions[newIndex];
    this.selectedIndex = newIndex;
  }
  submit() {
    this.testStatus = "done";
    this.finalResult();
  }

 countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    this.tick(seconds,mins);
}

tick(seconds,mins) {
  var current_minutes = mins-1
        seconds--;
       this.timeleft =  current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(()=>this.tick(seconds,mins), 1000);
        } else {
            if(mins > 1){
                this.countdown(mins-1);           
            }else{
              this.testStatus = "done";
              this.finalResult();
            }
        }
}
}
