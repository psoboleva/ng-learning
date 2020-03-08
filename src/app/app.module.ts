import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page-elements/header/header.component';

import { GalleriesListComponent } from './galleries/galleries-list/galleries-list.component';
import { GalleryComponent } from './galleries/gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { PhotoCollectionComponent } from './UI-kit/photo-collection/photo-collection.component';
import { PhotoComponent } from './UI-kit/photo-collection/photo/photo.component';
import { PhotoZoomComponent } from './UI-kit/photo-collection/photo-zoom/photo-zoom.component';
import { PhotoZoomReducer } from './UI-kit/photo-collection/photo-zoom/photo-zoom.reducer';

import { NotificationsReducer } from './UI-kit/notifications/notifications-ngrx/notifications.reducer';
import { NotificationsComponent } from './UI-kit/notifications/notifications.component';
import { NotificationsNgrxComponent } from './UI-kit/notifications/notifications-ngrx/notifications-ngrx.component';
import { HeadingsToSectionsComponent } from './UI-kit/text-parser/headings-to-sections/headings-to-sections.component';
import { HeadingsToSidebarComponent } from './UI-kit/text-parser/headings-to-sidebar/headings-to-sidebar.component';
import { TextParserWrapperComponent } from './UI-kit/text-parser/text-parser-wrapper/text-parser-wrapper.component';
import { FooterComponent } from './page-elements/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleriesListComponent,
    GalleryComponent,
    PhotoCollectionComponent,
    PhotoComponent,
    HeaderComponent,
    PhotoZoomComponent,
    NotificationsComponent,
    AboutComponent,
    NotificationsNgrxComponent,
    HeadingsToSectionsComponent,
    HeadingsToSidebarComponent,
    TextParserWrapperComponent,
    SafeHtmlPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      notification: NotificationsReducer,
      selectedPhoto: PhotoZoomReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
