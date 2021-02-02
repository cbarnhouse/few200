import { BehaviorSubject, Observable } from "rxjs";

export class MessageService {

  private secretMessage = 'default';
  private subject = new BehaviorSubject<string>(this.secretMessage);

  getMessageObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  setMessage(val: string): void {
    this.secretMessage = val;
    this.subject.next(this.secretMessage);
  }

  getMessage(): string {
    return this.secretMessage;
  }

}
