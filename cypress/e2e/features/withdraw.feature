Feature: Retiro de Fondos en Parabank

  Background:
    Given el usuario está en la página de retiro de dinero

  Scenario: Retiro exitoso de fondos
    When ingresa un monto válido para retirar
    And selecciona la cuenta de origen
    And hace clic en el botón de retiro
    Then el sistema debe confirmar el retiro exitoso