import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'test-angular-frontend-001';
  private service = inject(AppService);
  response =  signal<{ id: number, name: string, price: number }[]>([]); 

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.service.getProducts().subscribe({
      next: (res) => {
        this.response.set(res);
      }
    })
  }

}
