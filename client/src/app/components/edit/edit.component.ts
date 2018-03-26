import { Component, OnInit } from '@angular/core';
import { EditService } from '../../services/edit.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [EditService]
})
export class EditComponent implements OnInit {
  name: any;
  description: any;

  constructor(
    private editService: EditService,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onUpdateRecipe() {
    const recipe = {
      name: this.name,
      description: this.description
    };

    // Required Fields
    if(!this.validateService.validateRecipe(recipe)) {
      this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    this.editService.editRecipe(recipe).subscribe(data => {
      if (data.success) {
        this.flashMessage.show( data.message, { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['']);
      } else {
        this.flashMessage.show( data.message, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['']);
      }
    });
  }

}
