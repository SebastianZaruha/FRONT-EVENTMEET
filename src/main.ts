import { routes } from './app/app.routes';
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt'; // Import JwtModule
import { JwtHelperService } from '@auth0/angular-jwt'; // Import JwtHelperService

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        importProvidersFrom(JwtModule.forRoot({
            config: {
              tokenGetter: () => {
                return localStorage.getItem('token');
              },
              allowedDomains: ['your-domain.com'], // Replace with your allowed domains
              disallowedRoutes: ['/api/auth/token'], // Replace with your disallowed routes
            },
          })),
        JwtHelperService, // Provide JwtHelperService here
    ],
}).catch(err => console.error(err));