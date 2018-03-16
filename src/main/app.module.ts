import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CanActivate, Router, RouterModule, Routes} from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoursesModule } from '../pages/courses/courses.module';
import { LoginModule } from '../pages/login/login.module';
import { CourseService } from '../core/services/course.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '../core/interceptors/index';
import {CourseFormModule} from '../pages/courseForm/courseForm.module';
import {CoursesComponent} from '../pages/courses/courses.component';
import {CourseFormComponent} from '../pages/courseForm/main/courseForm.component';
import {LoginComponent} from '../pages/login/login.component';
import {PageNotFoundComponent} from '../pages/pageNotFound/pageNotFound.component';
import {CourseResolver} from '../shared/courseResolver';

@Injectable()
 class AuthGuard implements CanActivate {

    constructor(public authorizationService: AuthorizationService, public router: Router) {}

    canActivate(): boolean {
        if (!this.authorizationService.isAuthorizated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/courses',
        pathMatch: 'full'
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'courses/new',
        component: CourseFormComponent,
        data: {
            breadcrumb: 'Add course'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'courses/:id',
        component: CourseFormComponent,
        canActivate: [AuthGuard],
        resolve: {
            course: CourseResolver
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            breadcrumb: 'Login'
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            breadcrumb: 'Page not found'
        },
    }
];

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        LoginModule,
        CoursesModule,
        CourseFormModule,
        HttpClientModule,
        ModalModule.forRoot(),
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes
        ),
        BootstrapModalModule
    ],
    providers: [
        CourseService,
        AuthorizationService,
        CourseResolver,
        httpInterceptorProviders,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
