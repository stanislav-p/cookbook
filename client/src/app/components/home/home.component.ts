import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../../services/getall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  recipes: any;
  id: any;

  constructor(
    private getAllService: GetAllService
  ) { }

  ngOnInit() {
    this.getAllService.getAll().subscribe(data => {
      this.recipes = data;
    });
  }

}
