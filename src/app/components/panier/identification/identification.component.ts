import { Component, OnInit } from '@angular/core';
import { CompteClient } from 'src/app/interfaces/compte-client';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';


@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  user: CompteClient = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user).subscribe(result=>{
      if(result['token']){
        localStorage.setItem('token',result['token']);
        this.router.navigateByUrl('/compte');
      }
      else {
        this.router.navigateByUrl('/identification');
        }
    }

    )
  }

}
