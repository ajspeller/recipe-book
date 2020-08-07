import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';

import { AuthService } from './auth.service';

import { AuthResponseData } from './auth-response-data';

import { PlaceholderDirective } from './../shared/placeholder.directive';

import { AlertComponent } from './../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  isLoginMode = true;
  isLoading = false;
  error: string = null;

  subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(form.value);
    } else {
      authObs = this.authService.signup(form.value);
    }

    authObs.subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError(): void {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private showErrorAlert(message: string): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(
      alertComponentFactory
    );

    componentRef.instance.message = message;
    componentRef.instance.closeDialog.subscribe(() => {
      hostViewContainerRef.clear();
      this.subscriptions.forEach((s) => s.unsubscribe());
    });
  }
}
