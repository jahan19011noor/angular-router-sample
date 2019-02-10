import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrisisCenterService }  from '../crisis-center.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service: CrisisCenterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log("trying;")
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        // console.log(this.selectedId);
        return this.service.getCrises();
      })
    );
  }

  // ngDoCheck() {

  //   this.route.paramMap.subscribe(params => {
  //     this.selectedId = +params.get('id')
  //   })
  // }

}