import {Component, inject, resource, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
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
   * Signal to keep track of the selected user ID.
   */
  selectedUserId = signal<number | null>(null);

  /**
   * resource() manages async state for the user list.
   */
  users = resource({
    // Note: no more params() here, so no trigger to reload the list of users.
    // Only a loader() method is required.
    // The users resource object still has methods
    // like .isLoading(), .value() and .error(). ==> See template
    loader: () => {
      // this.reloadTrigger();
      return firstValueFrom(
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      );
    }
  });

  /**
   * Resource to fetch details of a specific user. Id is used as a param.
   */
  userDetail = resource({
    params: () => ({id: this.selectedUserId()}),
    loader: () => {
      const id = this.selectedUserId();
      if (id === null) return Promise.resolve(null);
      return firstValueFrom(
        this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      );
    }
  });

  /**
   * Select a user to show details ==> update the signal so the resource re-runs.
   */
  selectUser(id: number) {
    this.selectedUserId.set(id);
  }
}
