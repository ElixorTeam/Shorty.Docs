# Domains
In our system, "domains" are a carefully selected list of short domain names used to create shortened links. 
Shorter domain names greatly enhance the efficiency and brevity of our service.

### Base requirements
- Auth: `Bearer token`
- Role: `ROLE_ADMIN`

## CREATE
- Method: `POST`
- Url: `/api/v1/domains`
- Max elements for app: `5`


> | name  | type              | data type             | description    |
> |-------|-------------------|-----------------------|----------------|
> | value | required / unique | string                | domain address |

### Validation
- <u>value</u>
  - len: `5 < .. < 32`
  - regex: ```^[a-z0-9]+[.:][a-z0-9]{2,}$```

### Example

```json
{
  "value": "sh0.su"
}
```

### Response (200)
```json
{
  "data": {
    "uid": "00000000-0000-0000-0000-000000000000",
    "value": "sh0.su"
  }
}
```

### Errors
- [Not unique](../misc/errors.md#notunique)
- [Not valid](../misc/errors.md#notvalid)
- [Too many records](../misc/errors.md#tomanyrecords)


## GET
- Method: `GET`
- Url: `/api/v1/domains`

### Response (200)

```json
{
  "data": [
    {
      "uid": "00000000-0000-0000-0000-000000000000",
      "value": "sh0.su"
    },
    {
      "uid": "00000000-0000-0000-0000-000000000000",
      "value": "sh0.su"
    }
  ]
}
```


## DELETE / `{id}`
- Method: `DELETE`
- Url: `/api/v1/domains/{id}`

### Errors
- [Not found](../misc/errors.md#errors)
- [Is using](../misc/errors.md#isusing)