# Links
This entity is responsible for storing the link along with its settings, password, and other relevant details.
The entire service operates around this core entity!

### Base requirements
- Auth: `Bearer token`

## CREATE
- Method: `POST`
- Url: `/api/v1/user/links`
- Unique: `domainUid` + `subdomainUid` + `path`
- Max elements for user: `100`

> | name         | type     | data type      | description                  | 
> |--------------|----------|----------------|------------------------------|
> | title        | required | string         | title                        |
> | subdomainUid |          | UUID           | subdomain uid                |
> | domainUid    | required | UUID           | domain uid                   |
> | urls         | required | list\<string\> | url addresses for shortening |
> | path         | required | string         | url path                     |
> | tags         |          | string         | tags                         |
> | password     |          | string         | password                     |

### Validation
- <u>title</u>
  - len: `[2, 64]`
- <u>urls</u>
  - count: `[1, 5]`
  - max url len: `250`
  - protocol: `https`
  - regex № 1: `^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$`
  - regex № 2: `^\d+\.\d+\.\d+\.\d+$`
- <u>path</u>
  - len: `[2, 16]`
- <u>tags</u>
  - count: `[0, 5]`
  - tag len: `[2, 16]`
- <u>password</u>
  - len: `[2, 16]`

### Example

```json
{
  "title": "Untitled",
  "path": "94czwi",
  "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
  "urls": ["https://www.youtube.com/watch?v=GVTf9lLNnBU", "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::"],
  "tags": []
}
```

### Response (200)
```json
{
  "data": {
    "uid": "13c64855-4844-40ee-a137-b8adf4e211f7",
    "title": "Untitled",
    "path": "94czwi",
    "urls": [
      "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::",
      "https://www.youtube.com/watch?v=GVTf9lLNnBU"
    ],
    "isEnable": true,
    "tags": [],
    "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
    "subdomainUid": null,
    "password": null,
    "updateDt": "2024-06-03T22:13:10.968+00:00",
    "createDt": "2024-06-03T22:13:10.968+00:00"
  }
}
```

### Errors
- [Not unique](../misc/errors.md#notunique)
- [Not valid](../misc/errors.md#notvalid)
- [Too many records](../misc/errors.md#tomanyrecords)
- [Nested record not found](../misc/errors.md#fknotfound)


## GET
- Method: `GET`
- Url: `/api/v1/user/links`

### Response (200)
```json
{
  "data": [
    {
      "uid": "a569fe2f-14c5-4f14-ad83-63c2942d737e",
      "title": "tests2",
      "path": "94czwi1",
      "urls": [
        "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::",
        "https://www.youtube.com/watch?v=GVTf9lLNnBU"
      ],
      "isEnable": true,
      "tags": [],
      "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
      "subdomainUid": null,
      "password": null,
      "updateDt": "2024-06-03T22:14:58.385+00:00",
      "createDt": "2024-06-03T22:14:58.385+00:00"
    },
    {
      "uid": "13c64855-4844-40ee-a137-b8adf4e211f7",
      "title": "Untitled",
      "path": "94czwi",
      "urls": [
        "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::",
        "https://www.youtube.com/watch?v=GVTf9lLNnBU"
      ],
      "isEnable": true,
      "tags": [],
      "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
      "subdomainUid": null,
      "password": null,
      "updateDt": "2024-06-03T22:13:10.968+00:00",
      "createDt": "2024-06-03T22:13:10.968+00:00"
    }
  ]
}
```


## GET / `{id}`
- Method: `GET`
- Url: `/api/v1/user/links{id}`

### Response (200)
```json
{
  "data": {
      "uid": "a569fe2f-14c5-4f14-ad83-63c2942d737e",
      "title": "tests2",
      "path": "94czwi1",
      "urls": [
        "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::",
        "https://www.youtube.com/watch?v=GVTf9lLNnBU"
      ],
      "isEnable": true,
      "tags": [],
      "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
      "subdomainUid": null,
      "password": null,
      "updateDt": "2024-06-03T22:14:58.385+00:00",
      "createDt": "2024-06-03T22:14:58.385+00:00"
    }
}
```

### Errors
- [Not found](../misc/errors.md#errors)


## UPDATE / `{id}`
- Method: `PUT`
- Url: `/api/v1/user/links{id}`


> | name     | type     | data type      | description                  | 
> |----------|----------|----------------|------------------------------|
> | title    | required | string         | title                        |
> | isEnable | required | bool           | is link enable for redirect  |
> | tags     |          | string         | tags                         |
> | password |          | string         | password                     |

### Validation
- <u>title</u>
  - len: `[2, 64]`
- <u>tags</u>
  - count: `[0, 5]`
  - tag len: `[2, 16]`
- <u>password</u>
  - len: `[2, 16]`

### Example

```json
{
  "title": "Untitled",
  "isEnable": "true",
  "tags": []
}
```

### Response (200)
```json
{
  "data": {
    "uid": "13c64855-4844-40ee-a137-b8adf4e211f7",
    "title": "Untitled",
    "path": "94czwi",
    "urls": [
      "https://vms.dobroe22.keenetic.pro/#v1:0:=qemu%2F103:4:::::::",
      "https://www.youtube.com/watch?v=GVTf9lLNnBU"
    ],
    "isEnable": true,
    "tags": [],
    "domainUid": "9e2b3b57-5205-479f-9cfe-b2eeb135eff6",
    "subdomainUid": null,
    "password": null,
    "updateDt": "2024-06-03T22:13:10.968+00:00",
    "createDt": "2024-06-03T22:13:10.968+00:00"
  }
}
```

### Errors
- [Not found](../misc/errors.md#errors)


## DELETE / `{id}`
- Method: `DELETE`
- Url: `/api/v1/user/links/{id}`

### Errors
- [Not found](../misc/errors.md#errors)