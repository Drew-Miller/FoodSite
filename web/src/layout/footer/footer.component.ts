import { Component } from '@angular/core';

import { LoremIpsomService } from 'src/shared/shared.bundle';

@Component({
  selector: '[app-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private index = 0;
  private text: string;
  private itemCount = 5;
  public Items = Array(this.itemCount).fill(true).map((x, i) => i);
  public Loaded = false;
  public Now: Date = new Date();

  public constructor(private loremService: LoremIpsomService) {
    this.loremService.Get(1000).subscribe({
      next: (value) => {
        this.text = value;
        this.Loaded = true;
      }
    });
  }

  public GetText(count: number) {
    this.index += count;
    return this.text.split(' ').slice(this.index - count, this.index).join(' ');
  }
}
