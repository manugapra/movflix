import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieImgPipe } from './pipes/movie-img.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MovieComponent,
    MovieImgPipe,
    CarouselComponent,
  ],
  imports: [CommonModule],
  exports: [NavbarComponent, MovieComponent, MovieImgPipe, CarouselComponent],
})
export class SharedModule {}
