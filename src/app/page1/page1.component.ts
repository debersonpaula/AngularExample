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
    // initializes user data
    this.user = {name: ''};
  }

  ngOnInit() {
    // get data from service
    this.getData();
  }

  getData(): void {
    this.service.getData().subscribe(data => this.user = data);
  }

  save(): void {
    const result = this.service.addData(this.user)
      .subscribe();
  }

}
