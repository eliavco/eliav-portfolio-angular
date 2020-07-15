import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AnalyticsEventService } from './services/analytics-event/analytics-event.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarHttpModule } from '@ngx-loading-bar/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		HomeBannerComponent,
		TabsComponent,
		WelcomeComponent,
		FeaturesComponent,
		FooterComponent,
		GalleryComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingBarHttpClientModule,
		LoadingBarRouterModule,
		LoadingBarHttpModule,
		FontAwesomeModule,
		AppRoutingModule
	],
	providers: [
		AnalyticsEventService,
		Title
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
