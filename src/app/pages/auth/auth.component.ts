import { HttpErrorResponse }                  from '@angular/common/http';
import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { LoginResponseInterface }             from '../../../interfaces/auth.interface';
import { AuthService }                        from '../../services/auth.service';

@Component({
    selector   : 'ngx-auth',
    templateUrl: './auth.component.html',
    styleUrls  : [ './auth.component.scss' ],
})
export class AuthComponent implements OnInit {
    
    public showPassword: boolean;
    public loginForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }
    
    ngOnInit(): void {
        this.authService.logout();
        this.createLoginForm();
    }
    
    public getInputType() {
        if (this.showPassword) {
            return 'text';
        }
        return 'password';
    }
    
    public toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }
    
    public createLoginForm() {
        this.loginForm = this.formBuilder.group({
            username: [ '', Validators.compose([
                Validators.required,
                Validators.minLength(2),
            ]) ],
            password: [ '', Validators.compose([
                Validators.required,
                Validators.minLength(5),
            ]) ],
        });
    }
    
    public clickLoginButton() {
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.authentication(this.loginForm.value)
            .subscribe((response: LoginResponseInterface) => {
                    localStorage.setItem('token', response.token);
                    this.router.navigate([ '/pages/dashboard' ]);
                },
                (error: HttpErrorResponse) => {
                    alert('Giriş Başarısız!');
                });
    }
}
