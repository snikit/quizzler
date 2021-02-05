import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-admin-question-bank',
  templateUrl: './admin-question-bank.component.html',
  styleUrls: ['./admin-question-bank.component.scss'],
})
export class AdminQuestionBankComponent implements OnInit {
  constructor(private confirmationService: ConfirmationService) {}

  filtersShown = false;
  searchExpanded = false;
  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ];

  products = [
    {
      code:
        'The figure above shows the graph of the function f, defined by f of x = the absolute value of 2x, end absolute value, + 4 for all numbers x. For which of the following functions g, defined for all numbers x, does the graph of g intersect the graph of f ?',
      quantity: 201,
      category: 'Java',
      name: 'Jemie',
    },
    {
      code: '1986-04-02',
      quantity: 902,
      category: 'Java',
      name: 'Cordi',
    },
    {
      code: '1997-09-05',
      quantity: 14,
      category: 'Java',
      name: 'Tilly',
    },
    {
      code: '1982-01-02',
      quantity: 898,
      category: 'AWS',
      name: 'Orsola',
    },
    {
      code: '1991-08-02',
      quantity: 364,
      category: 'SQL',
      name: 'Anallese',
    },
    {
      code: '1980-02-15',
      quantity: 30,
      category: 'SQL',
      name: 'Mary',
    },
    {
      code: '1984-11-29',
      quantity: 75,
      category: 'AWS',
      name: 'Perry',
    },
    {
      code: '1984-04-09',
      quantity: 754,
      category: 'Java',
      name: 'Barbi',
    },
    {
      code: '1992-11-16',
      quantity: 671,
      category: 'Java',
      name: 'Janis',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
    {
      code: '1988-09-09',
      quantity: 325,
      category: 'AWS',
      name: 'Ana',
    },
  ];

  ngOnInit(): void {}

  deleteConfirm(question) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete the highlighted Question ?`,
      accept: (questionData) => {
        console.log(`delete ${JSON.stringify(questionData)}`);
      },
      header: 'DELETE QUESTION',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'black-btn',
      rejectButtonStyleClass: 'black-btn',
      acceptLabel: 'YES',
      rejectLabel: 'NO',
    });
  }
}
