import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ad-astra',
    loadChildren: () => import('./filmes/ad-astra/ad-astra.module').then( m => m.AdAstraPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'frozen',
    loadChildren: () => import('./filmes/frozen/frozen.module').then( m => m.FrozenPageModule)
  },
  {
    path: 'breaking-bad',
    loadChildren: () => import('./series/breaking-bad/breaking-bad.module').then( m => m.BreakingBadPageModule)
  },
  {
    path: 'os-simpsons',
    loadChildren: () => import('./desenhos/os-simpsons/os-simpsons.module').then( m => m.OsSimpsonsPageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./desenhos/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
