import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
chambres = [];
  constructor(public http: HttpClient, private route: Router, private viewportScroller: ViewportScroller) {
    this.http.get('http://localhost:3001/api/getchambres').subscribe((data) => {
      this.chambres = data as any;
      console.log(this.chambres);
    }
    );
   }

  ngOnInit(): void {
  }

}
