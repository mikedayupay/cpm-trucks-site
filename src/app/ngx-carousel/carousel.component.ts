import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore} from 'ngx-carousel';


@Component ({
    selector: 'app-carousel',
    template: `
        <ngx-carousel
            [inputs]="carouselBanner"
            [moveToSlide]="1"
            (onMove)="onmoveFn($event)">

                <ngx-item NgxCarouselItem class="bannerStyle">
                    <img src="../../assets/images/isuzu1.jpg">
                </ngx-item>

                <ngx-item NgxCarouselItem class="bannerStyle">
                    <img src="../../assets/images/isuzu2.jpg">
                </ngx-item>

                <ngx-item NgxCarouselItem class="bannerStyle">
                    <img src="../../assets/images/isuzu3.jpg">
                </ngx-item>

                <button NgxCarouselPrev class='leftRs'>&#10094;</button>
                <button NgxCarouselNext class='rightRs'>&#10095;</button>

        </ngx-carousel>
    `,
    styles: [ `

        bannerStyle h1 {
            background-color: #ccc;
            min-height: 300px;
            text-align: center;
            line-height: 300px;
        }
        .leftRs {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 50px;
            height: 50px;
            left: 0;
            opacity: .5;
            cursor: pointer;
            transition: 0.6s ease;
            border-radius: 999px;
        }
    
        .rightRs {
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 50px;
            height: 50px;
            right: 0;
            opacity: .5;
            cursor: pointer;
            border-radius: 999px;
        }

    `]

})

export class CarouselComponent implements OnInit{

    public carouselBanner: NgxCarousel;
    
    ngOnInit() {
        this.carouselBanner = {
            grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
            slide: 1,
            speed: 800,
            animation: 'lazy',
            interval: 5000,
            point: {
              visible: true,
              pointStyles: `
                .ngxcarouselPoint {
                  list-style-type: none;
                  text-align: center;
                  padding: 12px;
                  margin: 0;
                  white-space: nowrap;
                  overflow: auto;
                  position: absolute;
                  width: 100%;
                  bottom: 20px;
                  left: 0;
                  box-sizing: border-box;
                }
                .ngxcarouselPoint li {
                  display: inline-block;
                  border-radius: 999px;
                  background: rgba(255, 255, 255, 0.55);
                  padding: 5px;
                  margin: 0 3px;
                  transition: .4s ease all;
                }
                .ngxcarouselPoint li.active {
                    background: white;
                    width: 10px;
                }
              `
            },
            load: 2,
            loop: true,
            touch: true
        }
    }

    onmoveFn(data: NgxCarouselStore) {
        console.log(data);
      }
}