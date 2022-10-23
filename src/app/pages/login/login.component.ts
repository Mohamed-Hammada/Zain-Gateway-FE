import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  topicHasError: any;
  errorMsg: any;
  userNameTs: any;
  passwrordTs: any;
  submitted: any;
  @Output()
  isAuthorized = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.table({'user name':this.userNameTs , 'password':this.passwrordTs })
    this.isAuthorized.emit(true);
  }

}
