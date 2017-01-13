import { Component, Input } from '@angular/core';

declare var marked: any;

@Component({
  moduleId: module.id.toString(),
  selector: 'markdown-output',
  templateUrl: './markdown-output.component.html'
})
export class MarkdownOutputComponent {
  marked: any;

  @Input()
  content: string;

  constructor() {
    this.marked = marked;
  }

  updateMarkedContent(content) {
    let mdOutput = document.getElementById('markdown-output');
    if (!content) {
      mdOutput.innerHTML = '';
    } else {
      mdOutput.innerHTML = this.marked(content);
    }
  }
}
