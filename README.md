# README: Pruebas de Parabank con Cypress

Descripción: Este proyecto automatiza pruebas del portal Parabank utilizando Cypress.io. Las pruebas abarcan operaciones básicas como registrar usuario, loguearse con el usuario, agregar cuentas, hacer retiros y permitir transferencias que no sobrepasen el cupo inicial de $515.80 que es el balance de la cuenta.

Requisitos: Antes de ejecutar las pruebas, asegúrate de tener lo siguiente:
1. Node.js instalado: Descárgalo desde (https://nodejs.org/)
2. Dependencias de Cypress: Se instalan automáticamente en este proyecto.

## Instrucciones del proyecto

### Instalación de Cypress

1. Instalamos Cypress en el proyecto con el comando: ```npm install cypress --save-dev```

2. Ejecutamos Cypress con el comando: ```npx cypress open``` para abrir la interfaz, ```npx cypress run``` para ejecutar en consola.

3. En la interfaz de Cypress seleccionamos la opcion E2E Testing.

4. Damos clic y seleccionamos a cualquier navegador en este caso trabajaremos con Microsoft Edge.

5. Al seleccionar el navegador damos clic en la opcion Start E2E Testing in Edge.

6. Aparecera una ventana con la url (https://parabank.parasoft.com/__/#/specs)
   
7. Seleccionamos cualquier .js para hacer pruebas, si resulta todo correcto saldra OK, caso contrario saldra ERROR.

### Instalación de Reportes en Cypress 

1. Instalamos los reportes de cypress en el proyecto con el comando: ```npm install cypress-mochawesome-reporter --save-dev```

2. Para generar el reporte de Cypress usamos el comando: npx cypress run para depurar los archivos cy.js, con eso se mostrará al principio los reportes en JSON, pero al momento de terminar la compilación se mostrará en formato HTML.

3. En el archivo ```cypress.config.js``` añadimos en este código:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Parabank Testing Reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
    csv: true,
    timestamp: "mmddyyyy_HHMMss"
  },

  e2e: {
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
    screenshotOnRunFailure: true, 
    video: true,
    setupNodeEvents(on) {
      require("cypress-mochawesome-reporter/plugin")(on); // Se añade para importar el plugin del reporte
    },
  }
});
```
4. Sin inportar el resultado de las pruebas compiladas, nos dirigiremos a la carpeta reports, revisamos si se ha generado corectamente el reporte para luego abrirlo con el navegador que estamos usando, en este caso Edge.
 
5. Damos clic y seleccionamos a cualquier navegador en este caso trabajaremos con Microsoft Edge.

### Instalación de Gherkin en Cypress

1. Instalamos Gherkin en el proyecto con el comando: ```npm install cypress-cucumber-preprocessor --save-dev```

2. Creamos la carpeta features para guardar los archivos .feature.

3. Creamos el archivo .feature para realizar las anotaciones en Gherkin.

4. Creamos la carpeta steps para guardar los archivos .js.

5. Importamos el Gherkin en los archivos .js de la carpeta steps: ```import { Given, When, Then } from "cypress-cucumber-preprocessor";```

6. En el archivo cypress.config.js añadimos en este código:

```javascript
const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Parabank Testing Reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
    json: true,
    csv: true,
    timestamp: "mmddyyyy_HHMMss"
  },

  e2e: {
    specPattern: [
      "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
      // "cypress/e2e/features/**/*.feature"
    ],
    stepDefinitions: "cypress/e2e/step_definitions/**/*.js",
    screenshotOnRunFailure: true, 
    video: true,
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber());
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  }
});
```

7. Sin inportar el resultado de las pruebas compiladas, nos dirigiremos a la carpeta reports, revisamos si se ha generado corectamente el reporte para luego abrirlo con el navegador que estamos usando, en este caso Edge.

8. Damos clic y seleccionamos a cualquier navegador en este caso trabajaremos con Microsoft Edge.

## Archivos de Dependencias

package.json
```typescript
{
  "devDependencies": {
    "cypress": "^14.3.2",
    "cypress-cucumber-preprocessor": "^4.3.1",
    "cypress-mochawesome-reporter": "^3.8.2",
    "mochawesome": "^7.1.3",
    "mochawesome-merge": "^5.0.0",
    "mochawesome-report-generator": "^6.2.0"
  }
}
```

## Pruebas del proyecto

Para ejecutar las pruebas utilizaremos los siguientes comandos:

```npx cypress run``` o ```npx cypress open```

El último me permite abrir la interfaz de Cypress para hacer las pruebas automatizadas.
