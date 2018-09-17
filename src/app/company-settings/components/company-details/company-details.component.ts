import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivationEnd, Event } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

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

    companyData = {};
    routerSubscription: Subscription;

    constructor(private router: Router, private dataService: DataService) {
        this.routerSubscription = this.subscribeRouter();
    }

    ngOnInit() {
    }

    subscribeRouter() {
        return this.router.events.subscribe(
            (event: Event) => {

                if (event instanceof ActivationEnd && event.snapshot.params['companyId']) {
                    const id = +event.snapshot.params['companyId'];

                    this.loadData(id);
                }
            }
        );
    }

    loadData(companyId: number) {
        this.dataService.getCompanyDetail(companyId).subscribe(
            data => this.companyData = data
        );
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

}
