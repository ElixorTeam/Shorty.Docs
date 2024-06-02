# Errors
Most popular universal errors

## NotFound
Record by id not found
- HttpCode: `404`
- On: `DELETE` `GET` `PUT`

### Example

```json
{
  "error": "RECORD_NOT_FOUND"
}
```

## IsUsing
The record cannot be deleted because it is referenced by other records.
- HttpCode: `409`
- On: `DELETE`

### Example
```json 
{ 
  "error": "IS_USING"
}
```

## NotUnique
The record cannot be created, because not unique
- HttpCode: `409`
- On: `POST` `PUT`

### Example
```json 
{ 
  "error": "IS_USING"
}
```

## ToManyRecords
The record cannot be created because the maximum count has been reached
- HttpCode: `422`
- On: `POST`

### Example
```json 
{ 
  "error": "TOO_MANY_RECORDS",
  "maxAllowedRecords": 10
}
```

## NotValid
The record is invalid
- HttpCode: `422`
- On: `POST` `PUT`

### Example
```json 
{ 
  "error": "BODY_NOT_VALID",
  "invalidFields": ["field1", "field2"]
}
```