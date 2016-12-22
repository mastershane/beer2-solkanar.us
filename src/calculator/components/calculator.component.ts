
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    template:require('./calculator.component.html')
})
export class CalculatorComponent {
    percentAlcohol;
    ounces;
    price;
    clear(): void{
        this.percentAlcohol = null;
        this.ounces = null;
        this.price = null;
    }
}
