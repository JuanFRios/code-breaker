import { Component, OnInit } from '@angular/core';
import { CodeBreakerService } from '../providers/services/code-breaker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private codeBreakerService: CodeBreakerService) { }

  ngOnInit(): void {
  }

  start(){
    this.codeBreakerService.restartGame().subscribe(() => {

    });
  }

}
