import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
})
export class Child1Component implements OnInit {
  ngOnInit(): void {
    console.error('1 initialize');
  }
  number = Math.random();
}
