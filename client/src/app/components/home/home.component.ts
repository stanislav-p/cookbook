import { Component, OnInit } from '@angular/core';
import { GetAllService } from '../../services/getall.service';
import { DeleteService } from '../../services/delete.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  recipes: any;
  id: any;

  constructor(
    private getAllService: GetAllService,
    private deleteService: DeleteService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllService.getAll().subscribe(data => {
      this.recipes = data;
      this.recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }

  onDeleteRecipe(recipe) {

    var question = confirm('Do you want to delete this recipe?');

    if (!question) {
      return false;
    } else {
      this.deleteService.deleteRecipe(recipe).subscribe(data => {
        if (data.success) {
          this.flashMessage.show( data.message, { cssClass: 'alert-success', timeout: 5000 });
          this.getAllService.getAll().subscribe(data => {
            this.recipes = data;
            this.recipes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          });
        } else {
          this.flashMessage.show( data.message, { cssClass: 'alert-danger', timeout: 5000 });
        }
      });
    }
  }

}
