# Statistics page
1. Create new Angular 18 component and keep charts logic
2. Provide steps to setup charts
3. Import { ChartsModule } from 'ng2-charts'; not working
4. Maybe it should be import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
5. Imports?
6. Import { NgModule } from '@angular/core';
7. Imports: [BaseChartDirective],?
8. BaseChartDirective?
9. Can't bind to 'options' since it isn't a known property of 'canvas' angular 18
10. Add it
11. Go through each of the error component and apply the below approach (This errors happens when the BaseChartDirective is not imported).
12. For customers.component Components within a Module
13. Type 'never[][]' is not assignable to type 'ChartDataset<"line", (number | Point | null)[]>[]'.
14. Fix next code
15. Fix code to use [data]="data" instead of [datasets]="data"
16. Type 'number[]' is not assignable to type 'ChartData<"bar" | "line", (number | Point | [number, number] | null)[], unknown
17. Bundle initial exceeded maximum budget. Budget 1.05 MB was

## Charts 
1. migrate to angular only and use chart.js component
2. fix ts Type 'any' is not assignable to type 'never'
3. Type 'never[]' is missing the following properties from type 'Statistics': users, sales, revenuets
4. Can't bind to 'chartType' since it isn't a known property of 'canvas'
5. specify version of ng2-charts chart.js
6. 'mat-panel-description' is not a known element:
