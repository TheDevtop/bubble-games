# About Shared

Shared is the directory for shared data and types.
It contains several subdirectores which are also documented here.

### Entities

These are the essential types, and they get stored in their respective datasets.

### Forms

These types are to be converted to json, and used by the Webapi.
This is because the Webapi communicates via json forms.

### ApiHandler

The ApiHandler is a wrapper class that makes the implementation of complex API's easier,
because it wraps all the essential code into a single class.

### Result Type

The result type is a concept borrowed from Rust.
It is a struct that contains a value and error object.
You can use the `Result.Unwrap()` method to get either the value object, or (in case of error) the error object.
