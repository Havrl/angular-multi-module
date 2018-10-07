import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Router, ActivationEnd, Event, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { CompanyDetails } from '../../models/company-details.model';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-company-details',
    template: `
  <h2>Company Settings</h2>
  <p><a href="javascript:;" routerLink="/">Back to companies</a></p>
  <p>
      Company Settings for the company {{ companyData.id }}
    </p>

    <p class="font-weight-bold">{{ companyData.title }}</p>
    <p class="font-italic">{{ companyData.body }}</p>
  `,
    styles: []
})
export class CompanyDetailsComponent implements OnInit, OnDestroy {

    companyId: number;
    companyData: Observable<{companyDetails: CompanyDetails}>;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private dataService: DataService,
      private store: Store<{companyDetails: CompanyDetails}>
      ) {
    }

    ngOnInit() {
      this.companyId = +this.route.snapshot.params['companyId'];

      // this.loadData(this.companyId);

      // this.companyData = this.store.select('companyDetails');
    }

    loadData(companyId: number) {
        this.dataService.getCompanyDetail(companyId).subscribe(
            data => this.companyData = data
        );
    }

    ngOnDestroy() {
    }

}
