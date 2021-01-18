### Consumo de la api

Para el consumi se realiza de manera muy sencilla, abriendo la colección de Postman proporcionada:

```
https://www.getpostman.com/collections/5a0573900aec9c77dd11
```

Se ordeno por carpetas de account y movements

Todos los campos requeridos se encuentran guardados en un JSON con la info testeada

### Endpoints

## Account: Create account

# Request: 

```
{
    "name": "Luis Colunga Perez Complete",
    "mail": "newComplete@gmail.com"
}
```

## Response: 

```
{
  "statusCode": 201,
  "message": "Account created",
  "id": 19,
  "account": "64728861019",
  "name": "Luis Colunga Perez Complete",
  "mail": "newComplete@gmail.com"
}
```

## Account: Get Account

Para hacer consultas, la cuenta se pasa a traves de params, en este caso viene con la cuenta del usuario anteriormente registrado

```
https://murmuring-dusk-38729.herokuapp.com/api/v1/account/64728861019
```

# Response: 

```
{
  "statusCode": 200,
  "message": "Account info",
  "id": 19,
  "account": "64728861019",
  "balance": 1000,
  "name": "Luis Colunga Perez Complete",
  "mail": "newComplete@gmail.com"
}
```

## Account: Add new balance

# Request: 

```
{
    "account": "64728861019",
    "balance": 1000.50
}
```

# Response: 

```
{
    "statusCode": 200,
    "message": "Updated balance",
    "balance": 2000.5
}
```

## Movements: New movement

# Request:

```
{
    "account": "64728861019",
    "amount": 500.30,
    "description": "test@endcom.mx"
}
```

# Response:

```
{
    "statusCode": 201,
    "message": "Movement registered"
}
```

## Movements: Get movements

Para hacer consultas, la cuenta se pasa a traves de params, en este caso viene con la cuenta del usuario anteriormente registrado, con esto, obtenemos todos los movimientos de la cuenta

```
https://murmuring-dusk-38729.herokuapp.com/api/v1/account/94405664018
```

# Response:

```
{
    "statusCode": 200,
    "message": "Account movements",
    "account": "64728861019",
    "movements": [
        {
            "id": 3,
            "movementCode:": "M003",
            "description": "test@endcom.mx",
            "amount": 500.3,
            "createDate": "2021-01-18T09:23:02.237Z"
        }
    ]
}
```
