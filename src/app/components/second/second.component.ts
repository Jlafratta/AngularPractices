import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  // ActivateRoute: servicio que contiene info del ruteo que se hizo para llegar al componente
  // de ahi obtenemos las whitecards (id x ej) con data

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
