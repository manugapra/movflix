import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Result } from '../../../models/request.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    '../../../../../node_modules/keen-slider/keen-slider.min.css',
    './carousel.component.scss',
  ],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() movies: Result[] = [];

  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>;

  slider: KeenSliderInstance = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        slides: {
          perView: 6,
          spacing: 15,
        },
      });
    }, 250);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
