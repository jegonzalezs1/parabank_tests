Feature: Registro de Usuario

  Background:
    Given el usuario está en la página de registro

  Scenario: Registro exitoso en Parabank
    When ingresa su información personal
    And ingresa sus credenciales de acceso
    And confirma la contraseña
    And hace clic en el botón de registro
    Then el sistema debe mostrar un mensaje de éxito

  Scenario: Registro fallido con usuario ya existente
    When ingresa su información personal
    And ingresa un nombre de usuario que ya está registrado
    And ingresa una contraseña válida
    And confirma la contraseña
    And hace clic en el botón de registro
    Then el sistema debe mostrar un mensaje de error indicando que el usuario ya existe