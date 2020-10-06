# Search Products Result

> ### Success story

1. Receive a **GET** request on route **/api/items?q=​{query}**
2. Returns **200** with search result data
3. Returns **204**, if no query is provided

> ### Exceptions

1. Returns error **404** if the endpoint that the consumer is requesting does not exist
2. Returns error **500** if there is an error when trying to search by the query
