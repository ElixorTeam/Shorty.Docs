# Subdomains
Subdomains are important because all users interact with them directly, bypassing the domain controller.

### Base requirements
- Auth: `Bearer token`


## CREATE
- Method: `POST`
- Url: `/api/v1/user/subdomains`
- Max elements for 1 domain for user: `3`


> | name      | type              | data type | description       |
> |-----------|-------------------|-----------|-------------------|
> | domainUid | required          | UUID      | domain uid        |
> | value     | required / unique | string    | subdomain address |

### Validation
- <u>value</u>
  - len: `2 < .. < 16`
  - regex: `^[a-zA-Z]{2,16}$`

### Example

```json
{
  "value": "test",
  "domainUid": "e481ae10-a860-45f3-be75-f537c108162b"
}
```

### Response (200)
```json
{
  "data": {
    "uid": "2e0225b9-80bd-4a80-932a-7d2b3ef2d7f4",
    "value": "test",
    "domainUid": "e481ae10-a860-45f3-be75-f537c108162b"
  }
}
```

### Errors
- [Not unique](../misc/errors.md#notunique)
- [Not valid](../misc/errors.md#notvalid)
- [Too many records](../misc/errors.md#tomanyrecords)
- [Nested record not found](../misc/errors.md#fknotfound)


## GET
Get all user domains data
- Method: `GET`
- Url: `/api/v1/user/subdomains`

### Response (200)

```json
{
  "data": [
    {
      "domainUid": "e07c99e4-fa63-4b5a-bb8f-085d0769b00b",
      "domainValue": "elixor.sh",
      "subdomains": []
    },
    {
      "domainUid": "e481ae10-a860-45f3-be75-f537c108162b",
      "domainValue": "sh0.su",
      "subdomains": [
        {
          "uid": "2e0225b9-80bd-4a80-932a-7d2b3ef2d7f4",
          "value": "baggerfast"
        },
        {
          "uid": "134c48e7-e8b0-4d69-b4f6-7f2d01250a50",
          "value": "vlasov"
        },
        {
          "uid": "2e3da268-71fd-4a2e-ae14-7fc6f4967fa5",
          "value": "teapod"
        }
      ]
    }
  ]
}
```


## DELETE / `{id}`
- Method: `DELETE`
- Url: `/api/v1/user/subdomains`

### Errors
- [Not found](../misc/errors.md#errors)
- [Is using](../misc/errors.md#isusing)