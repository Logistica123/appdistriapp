import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {SuggestionService} from '../../services/v1/suggestion.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.page.html',
  styleUrls: ['./suggestion-form.page.scss'],
})
export class SuggestionFormPage implements OnInit {
  suggestForm: FormGroup;
  submitting = false;

  constructor(private formBuilder: FormBuilder,
              private navController: NavController,
              private suggestionService: SuggestionService) {
    this.suggestForm = this.formBuilder.group({
      suggestion: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  sendSuggestion() {
    this.submitting = true;
    const body = {
      suggestion: this.suggestForm.value.suggestion
    };
    this.suggestionService.storeSuggestion(body)
      .subscribe((response: any) => {
        this.submitting = false;
        this.suggestForm.reset();
      }, error => {
        this.submitting = false;
      });
  }

}
