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

}


