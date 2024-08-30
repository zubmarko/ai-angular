# Setup Latest Angular

1. analyze code 
please provide steps to migrate from Angular.js 
to latest angular

2. I would prefer to use material ui instead of bootstrap in packages for new angular app

3. provide routes as in old angular.js app for new angular

4. provide structure based on old app for new app

5. make statistics and customers as pages

6. how to import app-routing.module.ts?

7. where import app.module?

8. Cannot match any routes. URL Segment: 'login'

9. Component AppComponent is standalone, and cannot be declared in an NgModule

10. Uncaught Error: ASSERTION ERROR: Type passed in is not NgModuleType, it does not have 'ɵmod' property.
    at throwError2 (core.mjs:524:9)

11. please migrate login page to new angular from angular.jd
use material ui
and keep all functionality as it is now
return only code of login component

12. change
    <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">
      Login
    </button>
to use square button

13. change
    <button mat-raised-button color="primary" type="submit" [disabled]="loginForm.invalid">
      Login
    </button>
to use mat-flat-button and full width medium size

14. ERROR NullInjectorError: R3InjectorError(_AppModule)[_AuthService -> _HttpClient -> _HttpClient]: 
  NullInjectorError: No provider for _HttpClient!

15. in old app
we have authService
export default function authService($q) {
    const STORAGE_KEY = 'isAuthenticated';
    let isAuthenticated = JSON.parse(localStorage.getItem(STORAGE_KEY)) || false;
  
    return {
      login: function(username, password) {
        if (username === 'admin' && password === 'password') {
          isAuthenticated = true;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(isAuthenticated));
          return $q.resolve();
        } else {
          return $q.reject('Invalid credentials');
        }
      },
      logout: function() {
        isAuthenticated = false;
        localStorage.removeItem(STORAGE_KEY);
      },
      isAuthenticated: function() {
        return isAuthenticated;
      }
    };
  }
  
  authService.$inject = ['$q'];

please use the same logic for new app authService

16. it's latest angular app
please migrate only statistics page from Angular.js to new app

17. please migrate only statistics page from Angular.js to new app

18. Can't bind to 'ngIf' since it isn't a known property of 'form

19. Can't bind to 'ngIf' since it isn't a known property of 'div' (used in the '_StatisticsComponent' component template).
If the 'ngIf' is an Angular control flow directive, please make sure that either the 'NgIf' directive or the 'CommonModule' is a part of an @NgModule where this component is declared.

20. analyze header component 
and migrate to material ui and latest angular

21. Can't bind to 'matMenuTriggerFor' since it isn't a known property of 'button

22. <app-toggle
  [label]="'Toggle Label'"
  [isChecked]="checked"
  (onToggle)="handleToggle($event)">
</app-toggle>

add to statistics and with label "Show Total Revenue"

and hide "Total Revenue" block

23. add logic to change page titles

24. return only code with app-header for customers.html
and logic to get user name and logout

25. I would prefer to use username and logout globally

26. but keep isAuthenticatedUser for authService 

27. username header.component.ts?
