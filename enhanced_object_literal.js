var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Shorthand for ‘handler: handler’
    handler,
    // Methods
    toString() {
        // Super calls
        return "d " + super.toString();
    },
    // Computed (dynamic) property names
    ['prop_' + (() => 42)()]: 42
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals