import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.scss',
})
export class Child3Component implements OnInit {
  ngOnInit(): void {
    console.error('3 initialize');
  }
}
