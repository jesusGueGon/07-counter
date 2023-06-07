import { Injectable } from '@angular/core';
import { Observable, Subject, interval, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  public numero: number = 0;
  public setTo: number = 0;
  public step: number = 0;

  public isReset: boolean = false;
  public onComenzar: boolean = false;
  public countDown: boolean = false;

  constructor() { }

  public obs$ = new Observable<number>( subs => {

    const intervalId = setInterval( () => {

      if(this.isReset) {
        subs.complete();
        clearInterval(intervalId);
        if(this.onComenzar)
        {
          this.numero = this.setTo;
        }

      }
      else
      {
        if(this.countDown)
        {
          if(this.step === 0)
          {
            this.numero = this.numero - 1;
          }
          else
          {
            this.numero = this.numero - this.step;
          }
        }
        else
        {
          if(this.step === 0 )
          {
            this.numero = this.numero + 1;
          }
          else
          {
            this.numero = this.numero + this.step
          // console.log('hola mundo');
          }

        }

      }

    } ,1000);
  });


  // startCount(cont: number, step: number) {



  //   interval(1000)
  //   .pipe(
  //     map( cont => {
  //       cont = cont + step;
  //     }),

  //   )
  //   .subscribe( val => console.log(val));

  // }

  pauseCount() {

  }

}
