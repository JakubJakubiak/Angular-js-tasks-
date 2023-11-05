import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'js-tasks';
  items: string[] = [`  factorial(n: number): number {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }
}`,   
    `function factorial(n) {
    return Array.from({length: n},
       (_, i) => i + 1).reduce((a, b) => a * b, 1);
}` ,
];


  inputNumber: number | undefined;
  factorialResult: number | undefined;

  factorial(n: number): number {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  calculateFactorial() {
    if (this.inputNumber) {
      this.factorialResult = this.factorial(this.inputNumber);
    }
  }

};


@Component({
  selector: 'app-sumat',
  template: `
  <div class=" reply  content">
  
    <pre class="terminal content_consol">{{ items }}</pre>

    <input  class="elemtsSpacing"  type="number" [(ngModel)]="inputNumber1">
    <input  class="elemtsSpacing"type="number" [(ngModel)]="inputNumber2">
    <button class="elemtsSpacing" (click)="calculatesuma()">Calculate Suma</button>
    <!-- <div *ngIf="sumResult !== undefined"> -->
    <div class="text reply">
      Result: {{ sumResult }}
    </div>
  </div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponentSumat {
  title = 'suma';
  items: string[] = [` suma(a: number, b: number): number {
    return a + b;
  }`,   
];


  inputNumber1: number | undefined;
  inputNumber2: number | undefined;
  sumResult: number | undefined;


  suma(a: number, b: number): number {
    return a + b;
  }

  calculatesuma() {
    if (this.inputNumber1 && this.inputNumber2) {
      this.sumResult = this.suma(this.inputNumber1, this.inputNumber2);
    }
  }

};
