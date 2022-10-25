import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
litsdisposchambres = 0;
litsdisposdortoirs = 0;

  constructor(public http: HttpClient, private route: Router, private viewportScroller: ViewportScroller) {
    this.http.get('http://localhost:3001/api/bedsavailable/chambres').subscribe((data: any) => {
      this.litsdisposchambres = data[0].total;
    }
    );

    this.http.get('http://localhost:3001/api/bedsavailable/dortoirs').subscribe((data: any) => {
      this.litsdisposdortoirs = data[0].total;
    }
    );
   }

  ngOnInit(): void {
  }

}
