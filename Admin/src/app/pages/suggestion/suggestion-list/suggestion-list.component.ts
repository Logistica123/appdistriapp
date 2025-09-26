import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/Suggestion';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  suggestions: Suggestion[] = [];
  loading = true;

  constructor(private suggestionService: SuggestionService) {
  }

  ngOnInit() {
    this.getSuggestions();
  }

  getSuggestions() {
    this.loading = true;
    console.log('getting suggestions...');
    this.suggestionService.getSuggestions()
      .subscribe((response: any) => {
        console.log(response);
        this.suggestions = response.suggestions;
      }, error => {
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }
}
