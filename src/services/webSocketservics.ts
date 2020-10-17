import { tap, retryWhen, delay } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';

export const webSocketService = (url: string, retryDelay: number) => { 
  const subject = webSocket(url);
  return subject
    .pipe(
      retryWhen(errors =>
        errors.pipe(
          tap(err => {
            console.error('Got error', err);
          }),
          delay(retryDelay),
        ),
      ),
    );
};