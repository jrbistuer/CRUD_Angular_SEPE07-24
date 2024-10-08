import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"del-cifo02","appId":"1:32213368281:web:0b186ed5d05e3bee02adc8","storageBucket":"del-cifo02.appspot.com","apiKey":"AIzaSyAB80RDDAH6-9BphAVpYEvLaYK_kkr23UE","authDomain":"del-cifo02.firebaseapp.com","messagingSenderId":"32213368281","measurementId":"G-C3ZPJVG0FW"})),
    provideAuth(() => getAuth())]
};
