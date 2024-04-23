import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(url => {
      const path = url[0].path;
      if (path === 'abc') {
        // Redirect to the AbcComponent or any other component
        // Example: this.router.navigateByUrl('/abc');
      }
    });
  }
}
