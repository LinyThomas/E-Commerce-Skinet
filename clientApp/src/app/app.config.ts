import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { jwtInterceptor } from "./core/interceptors/jwt.interceptor";
import { ApplicationConfig, NgModule } from "@angular/core";

export const AppConfig: ApplicationConfig = {
  providers: [provideHttpClient(withInterceptors([jwtInterceptor]))],
};