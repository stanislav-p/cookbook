import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AddService } from '../../services/add.service';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  name: String;
  description: String;

  constructor(
    private addService: AddService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddRecipe() {
    const recipe = {
      name: this.name,
      description: this.description
    };

    // Required Fields
    if(!this.validateService.validateRecipe(recipe)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.addService.addRecipe(recipe).subscribe(data => {
      if (data.success) {
        this.flashMessage.show( data.message, { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['']);
      } else {
        this.flashMessage.show( data.message, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['add']);
      }
    });
  }

}
