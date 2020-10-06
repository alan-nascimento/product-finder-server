# Product Detail

> ### Success story

1. Receive a **GET** request on route **/api/items/​{id}**.
2. Returns **200** with selected product data.

> ### Exceptions

1. Returns error **400** if the `id` passed in the URL is invalid.
2. Returns error **404** if the endpoint that the consumer is requesting does not exist.
3. Returns error **500** if there is an error when trying to get the product item.
