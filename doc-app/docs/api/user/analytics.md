# Link Analytics
Track metrics of links such as devices, os system, unique views and etc.

### Base requirements
- Auth: `Bearer token`

## GET
- Url: `/api/v1/user/links/{id}/analytics`
- Method: `GET`

### Response (200)

```json
{
  "data": {
    "statistics": {
      "views": 2,
      "uniqueViews": 1
    },
    "devicesData": {
      "os": [
        {
          "label": "windows",
          "value": 2
        }
      ],
      "device": [
        {
          "label": "Mobile",
          "value": 2
        }
      ]
    },
    "viewsData": [
      {
        "label": "2024-05-26",
        "value": 2
      }
    ]
  }
}
```

### Errors
- [Not found](../misc/errors.md#errors)


## DELETE / `{id}`
- Method: `DELETE`
- Url: `/api/v1/user/links/{id}/analytics`

### Errors
- [Not found](../misc/errors.md#errors)