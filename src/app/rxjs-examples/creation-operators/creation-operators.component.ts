import { Component, OnInit, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-creation-operators',
  templateUrl: './creation-operators.component.html',
  styleUrls: ['./creation-operators.component.css']
})
export class CreationOperatorsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('btn') btn: ElementRef;
  constructor() { }
  ngAfterViewInit(): void {
    let sourceBtn$ = fromEvent(this.btn.nativeElement, 'click');
    let sourceDoc$ = fromEvent(document, 'keyup');
  
    let subscription1 = sourceBtn$.subscribe(this.observer);
    let subscription2 = sourceDoc$.subscribe(this.observer);
  
    this.subscriptions.add(subscription1);
    this.subscriptions.add(subscription2);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  subscriptions = new Subscription();

  observer = {
    next: (val) => {
      console.log(`fromEvent: event ${val.type}`);
    },
    error: error => console.log(error),
    complete: () => console.log('complete')
  }  
}
