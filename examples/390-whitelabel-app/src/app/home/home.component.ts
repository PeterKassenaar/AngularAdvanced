import { Component, inject } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  // Dynamic component, content is loaded at runtime from ConfigService.
  private configService = inject(ConfigService);
  protected customerName = this.configService.config.customer;
  protected validCustomers = this.configService.config.validCustomers;
}
