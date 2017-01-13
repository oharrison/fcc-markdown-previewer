import { Component } from '@angular/core';

@Component({
  moduleId: module.id.toString(),
  selector: 'markdown-input',
  templateUrl: './markdown-input.component.html',
})
export class MarkdownInputComponent {
  content: string;
}
