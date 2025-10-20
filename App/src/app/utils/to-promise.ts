import {Observable} from 'rxjs';

export function toPromise<T>(observable: Observable<T>): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const subscription = observable.subscribe({
      next: (value) => {
        resolve(value);
        subscription.unsubscribe();
      },
      error: (error) => {
        reject(error);
        subscription.unsubscribe();
      }
    });
  });
}
