import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Event, Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-file-list',
  template: `
  <h2>File List</h2>
  <p><a href="javascript:;" routerLink="/">Back to companies</a></p>
  <p>
      File List for the company {{ companyId }}
    </p>
    <table class="table">
    <thead>
    <tr>
        <th>File</th>
        <th>Size</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>File 1</td>
        <td>30kb</td>
    </tr>
    <tr>
        <td>File 2</td>
        <td>120kb</td>
    </tr>
</tbody>

    </table>
  `,
  styles: []
})
export class FileListComponent implements OnInit, OnDestroy {

    companyId: number;
    routerSubscription: Subscription;

    constructor(private router: Router) {
        this.routerSubscription = this.subscribeRouter();
    }

    ngOnInit() {
    }

    subscribeRouter() {
        return this.router.events.subscribe(
            (event: Event) => {

                if (event instanceof ActivationEnd && event.snapshot.params['companyId']) {
                    const id = +event.snapshot.params['companyId'];

                    this.companyId = id;
                }
            }
        );
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }

}
