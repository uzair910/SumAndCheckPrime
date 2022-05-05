Coding assignment

Using C#, implement a backend REST API which:
1) Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.
2) Takes one integer as input, and returns information whether the sum is a prime number or not.

Optional Bonus: Using React / your favorite UI stack implement also a frontend UI page to test the API. User should be able to enter 1-n integers that are sent to API endpoint 1, and single integer that is sent to API endpoint 2.

Endpoint 1 could for example (but not necessarily) look like this:
GET http://localhost/myapi/?action=sumandcheck&numbers=1,2,3
-> {"result": 6, "isPrime": false}

Endpoint 2 could for example (but not necessarily) look like this:
GET http://localhost/myapi/?action=checkprime&number=89
-> {"isPrime": true}
