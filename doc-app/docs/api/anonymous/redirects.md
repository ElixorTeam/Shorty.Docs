# Redirects
This entity records all user interactions with shortened links, collecting information about the user's system, the time of the redirect, and other relevant data.

### Base requirements
- Auth: `NO`


## CREATE
- Method: `POST`
- Url: `/api/v1/redirects`

> | name      | type     | data type | description                            |
> |-----------|----------|-----------|----------------------------------------|
> | os        | required | string    | client os                              |
> | device    | required | string    | client device                          |
> | ip        | required | string    | client IpV4                            | 
> | userKey   | required | UUID      | unique client ID (generated on client) |
> | domain    | required | string    | domain address                         |
> | subdomain |          | string?   | subdomain address                      |
> | path      | required | string    | url path                               |

### Validation
- <u>os</u>
  - len: `2 < .. < 16`
- <u>device</u>
  - only: `Mobile` `Desktop`
- <u>domain</u>
  - len: `5 < .. < 32`
  - regex: `^[a-z0-9]+[.:][a-z0-9]{2,}$`
- <u>subdomain</u>
  - len: `2 < .. < 16`
  - regex: `^[a-zA-Z]{2,16}$`
- <u>path</u>
  - len: `2 < .. < 16`