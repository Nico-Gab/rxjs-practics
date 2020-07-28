import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.css']
})
export class ObserversComponent implements OnInit {

  constructor() { }
  array: string[] = ['1', '2', '3', '4', '5'];

  observer = {
    next: value => console.log(`next: ${value}`),
    error: error => console.log(`error: ${error}`),
    complete: () => console.log(`Complete...`)
  }

  observable = new Observable( subscriber => {
    subscriber.next('Hello');
    subscriber.next('world');
    subscriber.next('!');

    this.array.forEach( (val, i) => {
      setTimeout(
        () => {
          if (val === '5') {
            subscriber.complete(); // se cansela la ejecucion cuandor el valor es = a 5
          }
          subscriber.next(`(${i}.val): ${val} [time - ${1500 + 100**i}]`)
        },(1500 + 100**i)
      )
    });
    // subscriber.complete()
  });

  ngOnInit(){
    this.observable.subscribe(this.observer);
  }
}
