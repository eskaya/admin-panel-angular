import { HttpErrorResponse }                      from '@angular/common/http';
import { Component, OnInit, TemplateRef }         from '@angular/core';
import { NbToastrService, NbDialogService }       from '@nebular/theme';
import { HttpInterface, ITreeGridRow }            from '../../../interfaces/http.interface';
import { MovieInterface, MovieResponseInterface } from '../../../interfaces/movie.interface';
import { MovieService }                           from '../../services/movie.service';

@Component({
    selector   : 'ngx-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls  : [ './movie-list.component.scss' ],
})
export class MovieListComponent implements OnInit {
    
    public isLoad: boolean = false;
    public movies: ITreeGridRow<MovieResponseInterface>[] = [];
    public allColumns = [ 'title', 'category', 'directory', 'imdb_score', 'year', 'action' ];
    
    // pagination
    public limit: number = 20;
    public totalRecordsCount: number = 0;
    
    constructor(
        private movieService: MovieService,
        private toastrService: NbToastrService,
        private dialogService: NbDialogService,
    ) { }
    
    ngOnInit(): void {
        this.fnLoadMovieList();
    }
    
    // TODO: Backendden datayı data:[] içerisinde gönderildiği zaman
    //  <HttpInterface<MovieResponseInterface>> olarak fnLoadMovieList fonksiyonunu güncelle. Yoksa hata alırsın.
    public fnLoadMovieList(page: number = 1) {
        
        this.isLoad = false;
        const params = this.fnGetPaginationParams(page);
        this.movieService.getAllMovies(params).subscribe(
            (response: MovieResponseInterface[]) => {
                this.isLoad = true;
                this.movies = response.map<ITreeGridRow<MovieResponseInterface>>(
                    (item) => ({ data: item }),
                );
                // this.totalRecordsCount = response.meta.pagination?.total || 0;
            },
        );
    }
    
    // if you have pagination
    public fnGetPaginationParams(page: number): any {
        const params: any = {
            page : page - 1,
            limit: this.limit,
        };
        return params;
    }
    
    
    public fnOpenDialog(dialog: TemplateRef<any>, id) {
        this.dialogService.open(dialog, {
            context: {
                message: 'Are you sure you want to delete the product?',
                id,
            },
        });
    }
    
    public fnDeleteItem(_id) {
        this.movieService.delete(_id).subscribe((res) => {
                this.toastrService.success('Deletion successful');
                this.fnLoadMovieList();
            },
            (httpError: HttpErrorResponse) => {
                const { error } = httpError;
                this.toastrService.danger(error.message);
            });
    }
    
}
