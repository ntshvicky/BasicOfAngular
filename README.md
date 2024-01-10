# Basic of Angular
* TypeScript
* Angular2+
* CSS

## This is an basic example of an Angular application. Which has option to create two different modules for admin and public separates, Option for crerate service and use in components and create pipe and call in components.

## How to create a basic Angular application (You should have installed node)
1. First, make sure you have Angular CLI installed. If not, you can install it using npm:
> npm install -g @angular/cli 
* -g mean globally installed Angular CLI

2. create a new Angular project:
> ng new test-angular

3. create two modules for admin and public
> ng generate module public --routing
> ng generate module admin --routing
* --routing will create route files for both modules

4. create home component in both modules
> ng generate component public/home
> ng generate component admin/home

5. create pipes 
> ng generate pipe pipes/capitalize
> ng generate pipe pipes/upper

6. create service
> ng generate service services/data

## Required to do in code
> to access the pipes in components, you will need to add pipes to their modules like here in public/public.module.ts and admin/admin.module.ts

# What is Angular 
> An Angular application typically contains the following components:

**Modules:** Organizes the application into cohesive blocks of functionality. Each Angular app has at least one module, the root module.

**Components:** The basic building blocks of the UI. Each component consists of a TypeScript class, an HTML template, and styles.

**Templates:** Define the views. They are HTML files with Angular-specific elements and attributes.

**Services:** Provide specific functionality not directly related to views. Services can be injected into components and other services through dependency injection.

**Routing:** Manages navigation between views. It interprets browser URLs as instructions to navigate to a client-generated view.

**Directives:** Extend HTML with new attributes and behaviors.

**Pipes:** Transform displayed values within templates.

**Dependency Injection:** Angular's dependency injection system provides services or objects to components, enhancing modularity and reusability.

## Structure of a Module:
> An Angular module is a class decorated with @NgModule. It typically has the following parts:

**declarations:** This is where you declare the components, directives, and pipes that belong to the module.

**imports:** Here you can import other modules and their exported declarations. For example, BrowserModule for browser-based apps, FormsModule for template-driven forms, etc.

**providers:** This is where you list the service providers. It's used for dependency injection within the module.

**exports:** The set of components, directives, and pipes that can be used in the template of any component that is part of an Angular module that imports this module.

**bootstrap:** It's specifically used in the root module to define the root component. The root component is the main view of the application.


## Structure of a Component:
**Selector:** A custom HTML tag that represents the component.
**Template:** HTML that describes how the component renders.
**Styles:** CSS specific to the component.
**Class:** Contains the logic for the component. It's where you define properties, methods, etc.


## Types of Pipes:
> Angular provides several built-in pipes, and you can also create your own custom pipes. Some of the common built-in pipes include:

**DatePipe:** Formats a date value according to locale rules.
**UpperCasePipe:** Transforms text to uppercase.
**LowerCasePipe:** Transforms text to lowercase.
**CurrencyPipe:** Transforms a number to a currency string.
**DecimalPipe:** Transforms a number into a string with a decimal point.
**PercentPipe:** Transforms a number into a percentage string.
**JsonPipe:** Transforms an object into a JSON string.

+ Syntex : 
* {{ value | pipeName:arg1:arg2:... }}
+ Examples : 
* <p>{{ currentDate | date:'fullDate' }}</p>
* <p>{{ message | uppercase }}</p>
* <p>{{ amount | currency:'USD':true }}</p>


