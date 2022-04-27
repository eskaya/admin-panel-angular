import { Component, OnInit } from '@angular/core';

@Component({
    selector   : 'ngx-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls  : [ './movie-list.component.scss' ],
})
export class MovieListComponent implements OnInit {
    
    constructor() { }
    
    ngOnInit(): void {
        console.log('test');
    }
    
}
