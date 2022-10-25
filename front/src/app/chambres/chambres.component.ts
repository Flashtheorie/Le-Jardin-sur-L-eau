import { ViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-chambres',
  templateUrl: './chambres.component.html',
  styleUrls: ['./chambres.component.css']
})
export class ChambresComponent implements OnInit {
chambreinfos = [];
  constructor(public http: HttpClient, private route: ActivatedRoute, private viewportScroller: ViewportScroller) {
this.http.get('http://localhost:3001/api/getchambre/' + this.route.snapshot.params['id']).subscribe((data: any) => {
      this.chambreinfos = data;
    }
    );

}

  ngOnInit(): void {
  }

}
