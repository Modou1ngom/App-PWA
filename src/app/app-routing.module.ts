import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { PostListComponent } from './post-list/post-list.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

const routes: Routes = [

  {path:'posts',
    component:PostListComponent
   },
 
  {path:'',
   component:AcceuilComponent,
  },
  
  {path:'photos',
    component:PhotoListComponent,
   }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
