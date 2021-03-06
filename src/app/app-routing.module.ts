import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeBreakerComponent } from './code-breaker/code-breaker.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'codebreaker', component: CodeBreakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
