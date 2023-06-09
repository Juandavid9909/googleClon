import { Component, OnDestroy, OnInit } from '@angular/core';
import { GoogleResponse } from 'src/app/GoogleResponse.model';
import { SearchService } from 'src/app/search.service';
import { Subscription } from "rxjs";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnDestroy {

  results: GoogleResponse | null = null;
  subs: Subscription[] = [];
  term: string = "";

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
      const { term } = history.state;
      this.term = term;

      if(term) {
        this.subs.push(
          this.searchService.getSearchData(term)
            .subscribe((data: GoogleResponse) => {
              this.results = data;
            })
        );
      }
  }

  ngOnDestroy(): void {
      this.subs.map(s => s.unsubscribe());
  }

  search(form: NgForm): void {
    const { search_term } = form.value;

    this.subs.push(
      this.searchService.getSearchData(search_term)
        .subscribe((data: GoogleResponse) => {
          this.results = data;
        })
    );
  }
}
