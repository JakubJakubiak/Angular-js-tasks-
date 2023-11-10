import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  './scss/app.component.scss',
  './scss/app.componenttext.scss',
  './scss/app.componetTerminal.scss'
  ]
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
  
    <pre class="terminal content_consol textWhiteContainer">{{ items[1] }}</pre>

    <input  class="elemtsSpacing"  type="number" [(ngModel)]="inputNumber1">
    <input  class="elemtsSpacing"type="number" [(ngModel)]="inputNumber2">
    <button class="elemtsSpacing" (click)="calculatesuma()">Calculate Suma</button>
    <!-- <div *ngIf="sumResult !== undefined"> -->
    <div class="text reply">
      Result: {{ sumResult }}
    </div>
  </div>
`,
  styleUrls: [
    './scss/app.component.scss',
    './scss/app.componenttext.scss',
    './scss/app.componetTerminal.scss'
    ]
})
export class AppComponentSumat {
  title = 'suma';
  items: string[] = [` suma(a: number, b: number): number {
    return a + b;
  }`,  `const suma = (a: number, b: number) => a + b;`
];

  inputNumber1: number | undefined;
  inputNumber2: number | undefined;
  sumResult: number | undefined;

  suma = (a: number, b: number) => a + b;

  calculatesuma() {
    if (this.inputNumber1 && this.inputNumber2) {
      this.sumResult = this.suma(this.inputNumber1, this.inputNumber2);
    }
  }

};


@Component({
  selector: 'Largest-Number',
  template: `
  <div class=" reply  content textWhiteContainer">

  
  <pre class="terminal content_consol">{{ items }}
  <!-- <div *ngFor="let number of numbers; let i = index">
    <input class="elemtsSpacing" type="number" [(ngModel)]="numbers[i]">
  </div> -->
  <input class="elemtsSpacing input" type="number" [(ngModel)]="numbers[0]">
  <input class="elemtsSpacing input" type="number" [(ngModel)]="numbers[1]">
  <input class="elemtsSpacing input" type="number" [(ngModel)]="numbers[2]">
  <input class="elemtsSpacing input" type="number" [(ngModel)]="numbers[3]">
  <input class="elemtsSpacing input" type="number" [(ngModel)]="numbers[4]">

  <button class="elemtsSpacing" (click)="calculatesuma()">display largest number</button>
  
    <div class="text textWhite reply">
      Result: {{ sumResult }}
    </div>
    </pre>
  </div>
`,
  styleUrls: [
    './scss/app.component.scss',
    './scss/app.componenttext.scss',
    './scss/app.componetTerminal.scss'
    ]
})
export class LargestNumber {
  title = 'Largest';
  items: string[] = [`largestNumber(numbers:number[]) {
    return Math.max.apply(null, numbers);
  }`,   
];

  numbers: number[] = [10, 22, 9, 4, 15];
  sumResult: number | undefined;

  largestNumber(numbers: number[]) {
    return Math.max.apply(null, numbers);
  }

  calculatesuma() {
    if (this.numbers) {
      this.sumResult = this.largestNumber(this.numbers);
    }
  }
};



// @Component({
//   selector: 'app-your-component',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class YourComponent {
//   isCodeVisible: boolean = false;

//   showCode() {
//     this.isCodeVisible = true;
//   }
// }


