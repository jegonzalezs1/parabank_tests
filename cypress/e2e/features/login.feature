Feature: Inicio de Sesión en Parabank

  Background:
    Given el usuario está en la página de inicio de sesión

  Scenario: Inicio de sesión exitoso
    When ingresa un nombre de usuario válido
    And ingresa la contraseña correcta
    And hace clic en el botón de login
    Then el sistema debe mostrar el mensaje de bienvenida