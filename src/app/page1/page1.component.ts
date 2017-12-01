import { Component, OnInit } from '@angular/core';
import { TUserData } from '../struct/types';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  user: TUserData;

  constructor(private service: AppDataService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.service.getData().subscribe( function(data){
      console.log(data);
      this.user = data;
    });
  }

}
