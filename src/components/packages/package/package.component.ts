import {Component, EventEmitter, Input, Output} from '@angular/core';

import {NgClass} from '@angular/common';
import {Packeges} from '../../../models/pascages';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  standalone: true,
  imports: [
    NgClass
  ],
  styleUrl: './package.component.css'
})
export class PackageComponent {
  @Input() todo?: Packeges
  @Input() isHighlighted: boolean = false;
  @Input() isHiglitedDespensies: boolean = false;
  @Output() hover = new EventEmitter<string | null>();

  styleName(title: string | undefined): any {
    if (title === undefined) {
      return '';
    }
    if (title.includes('/')) {
      return title.split('/')[0] + '/'
    } else {
      return ''
    }
  }

  styleRestName(title: string | undefined): any {
    if (title === undefined) {
      return '';
    }
    if (title.includes('/')) {
      return title.split('/')[1]
    } else {
      return title
    }
  }

  formatNumber(num: number | undefined): string {
    if (num === undefined) {
      return '';
    }
    if (num >= 1_000_000) return Math.floor(num / 1_000_000) + 'M';
    if (num >= 1_000) return Math.floor(num / 1_000) + 'K';
    return num.toString();
  }
}
