import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
})
export class Child2Component implements OnInit {
  ngOnInit(): void {
    console.error('2 initialize');
  }
}
