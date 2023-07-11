"use client"
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const Dots = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dotSize:number = 4;
    const spacing:number = dotSize * 8;
    const minTvalue:number = 40;
    const areaAffected:number = 60;
    let mouseIsMoving:boolean = false;
    let dots:any[] = [];

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, 400);
        for (let i = 0; i < p.width; i += spacing) {
          for (let j = 0; j < p.height; j += spacing) {
            let dot = new Dot(i + spacing / 2, j + spacing / 2, dotSize);
            dots.push(dot);
          }
        }
      };

      p.draw = () => {
        p.background(0);
        dots.forEach((dot: Dot) => {
          dot.update(p.mouseX, p.mouseY, mouseIsMoving, areaAffected, minTvalue);
          dot.render(p);
        });
      };

      p.mouseMoved = () => {
        mouseIsMoving = true;
        setTimeout(() => {
          mouseIsMoving = false;
        }, 100);
      };
    };

    class Dot {
      x: number;
      y: number;
      size: number;
      transparency: number;

      constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.transparency = minTvalue;
      }

      update(
        mouseX: number,
        mouseY: number,
        mouseIsMoving: boolean,
        areaAffected: number,
        minTvalue: number
      ) {
        let distance = Math.sqrt(
          Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
        );
        if (mouseIsMoving && distance < areaAffected) {
          this.transparency = 255;
        } else {
          this.transparency = Math.max(minTvalue, this.transparency - 10);
        }
      }

      render(p: p5) {
        p.fill(255, this.transparency);
        p.ellipse(this.x, this.y, this.size);
      }
    }

    new p5(sketch, sketchRef.current as HTMLElement);
  }, []);

  return <div ref={sketchRef} />;
};

export default Dots;
