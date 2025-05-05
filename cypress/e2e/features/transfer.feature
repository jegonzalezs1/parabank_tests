Feature: Transferencia de Fondos en Parabank

  Background:
    Given el usuario está en la página de transferencia de dinero

  Scenario: Transferencia exitosa de fondos
    When ingresa un monto válido
    And selecciona la cuenta de origen
    And selecciona la cuenta de destino
    And hace clic en el botón de transferencia
    Then el sistema debe mostrar un mensaje confirmando la transferencia