import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QUIZ } from '../mock-quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  step: number = 0;
  questions: Array<Quiz> = QUIZ;
  currentQuestion: Quiz = this.questions[this.step];
  statusChat: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  nextStep(res: number) {
    this.step++;

    if (res === this.currentQuestion.reponse) {
      this.checkResult(this.statusChat, true);
    } else {
      this.checkResult(this.statusChat, false);
    }

    this.updateQuestion(this.step);
  }

  updateQuestion(step: number) {
    if ( this.questions[step] != null) {
      this.currentQuestion = this.questions[step];
    }
  }

  checkResult(statusCat: number, isSuccess: Boolean) {
    let nextStatus: number = 0;

    if (this.step === 1) {                                  // STEP 0
      if (isSuccess === true) {                             // SUCCESS
        nextStatus = 2;
      } else {                                              // FAIL
        nextStatus = 7;
      }
    } else if(this.step === 2) {                            // STEP 1
      if (isSuccess === true) {
        if (statusCat === 2) {
          nextStatus = 2;
        } else {
          nextStatus = 1;
        }
      } else {
        if (statusCat === 2) {
          nextStatus = 3;
        } else {
          nextStatus = 4;
        }
      }
    } else if(this.step === 3) {                            // STEP 2
      if (isSuccess === true) {
        switch(statusCat) {
          case 2:
            nextStatus = 2;
            break;
          case 3:
            nextStatus = 5;
            break;
          case 1:
            nextStatus = 1;
            break;
          case 4:
            nextStatus = 8;
            break;
        }
      } else {                                              // OUT OF STEP
        switch(statusCat) {
          case 2:
            nextStatus = 3;
            break;
          case 3:
            nextStatus = 6;
            break;
          case 1:
            nextStatus = 4;
            break;
          case 4:
            nextStatus = 9;
            break;
        }
      }
    } else {

    }

    this.statusChat = nextStatus;
  }
}
