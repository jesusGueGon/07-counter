import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CounterService } from './services/counter.service';
import { interval, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '07-counter';

  auxNumero = 0;

  subs: any;
  idIntervalo: any;

  setTo = 0;
  step = 0;

  // @ViewChild('steps')
  // step!: ElementRef<HTMLInputElement>;

  constructor(private counterService: CounterService) { }

  get counter() {
    console.log(this.step);
    console.log(this.setTo);
    return this.counterService.numero;

  }

  onComenzar() {

    this.counterService.isReset = false;
    const subscription = this.counterService.obs$;
    this.counterService.step = this.step;
    console.log(this.subs);
    this.subs = subscription;
    subscription.subscribe();

  }

  onPause() {

    this.counterService.isReset = true;
    this.counterService.onComenzar = false;

  }


  onDetener() {

    this.counterService.isReset = true;
    this.counterService.onComenzar = true;
    this.counterService.setTo = this.setTo;

  }

  onCountUp() {
    this.counterService.countDown = false;
  }

  onCountDown() {
    this.counterService.countDown = true;
  }





  // subscriber: any;

  ngOnInit(): void {

  }

  setCountTo(setTo: number) {
    this.setTo = setTo;
  }

  // onConverirSteps(): number {
  //   const valorStep = this.step.nativeElement.value;
  //   let stepsFinal = parseInt(valorStep);
  //   return stepsFinal;
  // }





}
