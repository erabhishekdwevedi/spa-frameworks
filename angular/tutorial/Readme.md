# ANGULAR TUTORIALS

## BASICS

1. Create a new app

```
ng new my-app

```

2. Open App in Browser

```
ng serve --open
ng server --o
```

3. Build project for production , output will be stored /dist directory

```
ng build

```

4. Generate Component

```
ng generate component component-name
ng g c component-name

ng g c components/component-name   // this will create src/app/components/
```

5. Generate Other Units from Angular

```
ng generate directive|pipe|service|class|guard|interface|enum|module  name
```

## Add bootstrap to project

1. Install Bootstrap

```
npm install bootstrap --save
```

2. Add bootstrap to style section of angular.json

```
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.scss"
            ]
```
If it doesn't reflect, build app again !

## Add Route

1. Add header or nav component
'''
ng g c routing/nav

'''

2. Add HTML to nav component

```
<header>
  <div class="container">
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </nav>
  </div>
</header>

```

3. Add nav component to app.component.html
```
<app-nav><app-nav>
```

4. Update app-routing.module.ts

```
import {AboutComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

```
