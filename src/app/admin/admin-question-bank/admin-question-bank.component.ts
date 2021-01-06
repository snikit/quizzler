import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './admin-question-bank.component.html',
  styleUrls: ['./admin-question-bank.component.css'],
})
export class AdminQuestionBankComponent implements OnInit {
  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' },
  ];

  products = [
    {
      code: '1983-08-02',
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
      code: '1987-08-16',
      quantity: 965,
      category: 'AWS',
      name: 'Jorry',
    },
    {
      code: '1997-09-12',
      quantity: 523,
      category: 'Java',
      name: 'Minne',
    },
    {
      code: '1997-01-03',
      quantity: 919,
      category: 'AWS',
      name: 'Etta',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
