import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FixturesComponent } from './fixtures/fixtures.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'league/:leagueId',
    component: HomeComponent,
  },
  {
    path: 'league/:leagueId/fixtures/:teamId',
    component: FixturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
