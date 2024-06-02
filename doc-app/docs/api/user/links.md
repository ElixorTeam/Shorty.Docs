# Links
This entity is responsible for storing the link along with its settings, password, and other relevant details.
The entire service operates around this core entity!

### Base requirements
- Auth: `Bearer token`

## CREATE
- Method: `POST`
- Max elements for user: `100`


## GET
- Method: `GET`


## GET / `{id}`
- Method: `GET`

### Errors
- [Not found](../misc/errors.md#errors)


## UPDATE / `{id}`
- Method: `PUT`

### Errors
- [Not found](../misc/errors.md#errors)


## DELETE / `{id}`
- Method: `DELETE`
- Url: `/api/v1/user/links/{id}`

### Errors
- [Not found](../misc/errors.md#errors)