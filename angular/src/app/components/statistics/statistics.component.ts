import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

interface Statistics {
  users: number;
  sales: number;
  revenue: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  title = 'Statistics Page';
  showRevenue = true;
  labels = ['Users', 'Sales'];
  data = [[]];
  statistics: Statistics = { users: 0, sales: 0, revenue: 0 }; 
  options: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStatistics().subscribe(
      (response) => {
        this.statistics = response;
        this.labels = ['Users', 'Sales', 'Revenue'];
        // @ts-ignore
        this.data = [[this.statistics.users, this.statistics.sales, this.statistics.revenue]];
        this.updateChartOptions();
      },
      (error) => {
        console.error('Error fetching statistics data:', error);
      }
    );
  }

  handleToggle(isChecked: boolean): void {
    this.showRevenue = isChecked;
    if (isChecked) {
      this.labels = ['Users', 'Sales', 'Revenue'];
      // @ts-ignore
      this.data = [[this.statistics.users, this.statistics.sales, this.statistics.revenue]];
    } else {
      this.labels = ['Users', 'Sales'];
      // @ts-ignore
      this.data = [[this.statistics.users, this.statistics.sales]];
    }
    this.updateChartOptions();
  }

  updateChartOptions(): void {
    this.options = {
      scales: {
        yAxes: [
          {
            ticks: {
              min: this.statistics.users,
              max: this.showRevenue ? this.statistics.revenue : this.statistics.sales,
            },
          },
        ],
      },
    };
  }

  // @ts-ignore
  onClick(event:MatSlideToggleChange): void {
    console.log(event);
  }
}
