# To-Do-Web

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

---

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Commands](#commands)
5. [Utils](#utils)
6. [FAQs](#faqs)
7. [Demo](#demo)

### General Info

---

Project structure.

> - Core: Services, Models, Pipes Globals.
> - Data:
> - Routes: Modules.
> - Shared:

### Screenshot

![Image text](https://github.com/skrpions/sigma-web/blob/main/src/assets/screen.png?raw=true)

## Technologies

---

A list of technologies used within the project:

- Angular CLI: Version 15.2.1
- Angular Material: Version 15.2.1
- Nodejs: Version 18.14.1

## Installation

---

A little intro about the installation.

```
$ git clone https://github.com/skrpions/to-do-web.git
$ cd ../path/to/the/file
$ npm install
$ ng s -o | npm start
```

## Commands

---

The following commands create modules, components, services, models, etc.

- Shared: Module

```
$ ng g m shared/angular-material --flat
```

---

- Routes: Module

```
$ ng g m routes --routing
```

---

- Guests: Module

```
$ ng g m routes/guest --routing
```

---

- Guests: Components

```
$ ng g c routes/guest/pages/home
$ ng g c routes/guest/components/header
$ ng g c routes/guest/components/body
$ ng g c routes/guest/components/form
$ ng g c routes/guest/components/footer
```

---

- Guests: Models

```
$ ng g i core/models/contact
$ ng g i core/models/department
```

---

- Guests: Services

```
$ ng g s core/services/department
$ ng g s core/services/translate
$ ng g s core/services/contact
```

---

- Guests: Pipes

```
$ ng g pipe core/pipes/translate
```

## Utils

---

Important: Assign aliases to routes.

- Go to _tsconfig.json_ and add the following:

```
"paths": {
  "@core": ["app/core"],
  "@core/_": ["app/core/_"],
  "@data": ["app/data"],
  "@data/_": ["app/data/_"],
  "@routes": ["app/routes"],
  "@routes/_": ["app/routes/_"],
  "@shared": ["app/shared"],
  "@shared/_": ["app/shared/_"],
  "@env": ["environments"],
  "@env/_": ["environments/_"]
},
```

## FAQs

---

A list of frequently asked questions

1. **How to share the web application on a local network?**

   - Execute:

```
$ ng s --host=0.0.0.0 --port=4200 -o
```

Then I must open a web browser (chrome, firefox) from any device and enter the ip of the local network: for example: _192.168.0.106:4200_.

## Demo

---

[Demo](https://skrpions.github.io/sigma-web/)
