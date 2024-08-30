import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ChartOptions, ChartData } from 'chart.js';

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
  data: ChartData<'bar' | 'line'> = {
    labels: ['Users', 'Sales'],
    datasets: []
  };  // Properly typed for Chart.js
  statistics: Statistics = { users: 0, sales: 0, revenue: 0 }; 
  options: ChartOptions<'bar' | 'line'> = {}; // Correctly typed for chart options

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStatistics().subscribe(
      (response: Statistics) => {
        this.statistics = response;
        this.data = {
          labels: ['Users', 'Sales', 'Revenue'],
          datasets: [
            { data: [this.statistics.users, this.statistics.sales, this.statistics.revenue], label: 'Statistics' }
          ]
        };
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
      this.data = {
        labels: ['Users', 'Sales', 'Revenue'],
        datasets: [
          { data: [this.statistics.users, this.statistics.sales, this.statistics.revenue], label: 'Statistics' }
        ]
      };
    } else {
      this.data = {
        labels: ['Users', 'Sales'],
        datasets: [
          { data: [this.statistics.users, this.statistics.sales], label: 'Statistics' }
        ]
      };
    }
    this.updateChartOptions();
  }

  updateChartOptions(): void {
    this.options = {
      responsive: true,
      scales: {
        y: {
          // @ts-ignore
          min: Math.min(...this.data.datasets[0].data),
          // @ts-ignore
          max: Math.max(...this.data.datasets[0].data),
        }
      }
    };
  }

  onClick(event: MatSlideToggleChange): void {
    console.log(event);
  }
}
