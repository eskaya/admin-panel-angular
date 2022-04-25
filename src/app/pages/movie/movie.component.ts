import { HttpErrorResponse }                  from '@angular/common/http';
import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService }                    from '@nebular/theme';
import { MovieService }                       from '../../services/movie.service';

@Component({
    selector   : 'ngx-movie',
    templateUrl: './movie.component.html',
    styleUrls  : [ './movie.component.scss' ],
})
export class MovieComponent implements OnInit {
    
    public movieForm: FormGroup;
    public isLoading: boolean = false;
    
    constructor(
        private formBuilder: FormBuilder,
        private movieService: MovieService,
        private toastrService: NbToastrService,
    ) { }
    
    ngOnInit(): void {
        this.fnCreateMovieForm();
    }
    
    public fnCreateMovieForm() {
        this.movieForm = this.formBuilder.group({
            _id       : [],
            title     : [ '', Validators.required ],
            imdb_score: [ '', Validators.compose([
                Validators.required,
                Validators.min(0),
            ]) ],
            category  : [ '', Validators.required ],
            year      : [ '', Validators.compose([
                Validators.required,
                Validators.min(1900),
            ]) ],
            country   : [ '', Validators.required ],
            director_id: ['', Validators.required],
        });
    }
    
    public clickSubmitButton() {
        const formValue = this.movieForm.value;
        if (formValue._id) {
        
        } else {
            this.fnCreateMovie(formValue);
        }
    }
    
    public fnCreateMovie(form) {
        this.isLoading = true;
        this.movieService.create(form).subscribe((response) => {
                this.isLoading = false;
                this.toastrService.success('Create new movie');
                this.fnCreateMovieForm();
            },
            (httpError: HttpErrorResponse) => {
                this.isLoading = false;
                const { error } = httpError;
                this.toastrService.danger(error);
            },
        );
    }
}
