# Demo
A running instance of Qverview can be found at: [https://ust-quantil.github.io/Qverview/](https://ust-quantil.github.io/Qverview/)

# Qverview
Qverview is a comparison framework for various technologies in the area of quantum application development.
It provides an overview of technologies, enables filtering, comparison and analysis of them, and allows identifying interoperabilities between different kinds of technologies.

## Data
The data folder contains several JSON files that form the knowledgebase. When referencing entities, care must be taken to use identical names in all files. E.g., when a Quantum Cloud Service is named 'XYZ' and a Software Development Kit supports this Quantum Cloud Service, the specific name 'XYZ' must be used.

## Filter
Qverview allows multi-criteria filtering of pre-mentioned data based on available attributes.
The 'Search all'-functionality is still in beta status – it allows to textually search accross all tables.

## Interoperabilities
Activate interoperability-feature between Software Development Kit (SDK), Quantum Cloud Service (QCS), and Quantum Execution Resource (QER) to show only interoperable technologies and hide incompatible ones.

# Download & Run
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
