import {Component, inject, resource, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

type User = {
  id: number;
  name: string;
  email: string;
  company: { name: string };
};

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http = inject(HttpClient);

  /**
   * A signal used only to trigger re-fetch.
   * Changing its value causes the resource to re-run.
   */
  private reloadTrigger = signal(0);

  /**
   * resource() manages async state.
   * Credits: https://angular.dev/guide/signals/resource
   */
  users = resource({
    params: () => ({
      id: this.reloadTrigger(),
    }),
    loader: () =>
      firstValueFrom(
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      )
  });

  /**
   * Updating the signal triggers a refetch.
   */
  reload() {
    this.reloadTrigger.update(v => v + 1);
  }
}
