import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { RouteData } from './struct/routedata';

const routes: Routes = [];
for (let i = 0; i < RouteData.length; i++) {
  routes.push( {path: RouteData[i].href, component: RouteData[i].comp} );
}

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
