# Tags
are used to structure and organize the storage of links. 
Each tag is associated with a specific **user**


## GET
Get all user tags
- Method: `GET`
- Url: `/api/v1/user/tags`

### Response (200)

```json
{
  "data": [
    "tag1", "tag2", "tag3"
  ]
}
```