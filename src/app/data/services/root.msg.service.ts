import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class RootMsgService {
  constructor(private messageService: MessageService) {}

  showError(title: string, msg: string) {
    this.messageService.clear();

    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: msg,
    });
  }
}
