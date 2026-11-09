----------------------------------
TypeScript Access Modifiers in OOP
----------------------------------

## Introduction

Access modifiers are able to control class member's accesses inside and outside of the class. These are used for protect data and control the interaction of the data. Generally, TypeScript provides four types of access
modifiers -

1. public
2. private
3. protected
4. readonly

## Explain: "public"

A public item can be accessed from anywhere: inside its class, or from a subclass. Even the "public" is not specified, still it can be accessed from everywhere logically.

class User {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Swarup");
console.log(user.name); // Swarup


## Explain: "private"

A private item can be accessed from only inside its class. This is useful for hiding important info, such as a userID or password.

class User {
    private userID : string = "Swarup_A500";

    getUserID(): string {
        return this.userID;
    }

}


## Explain: "protected"
A protected item is accessible inside its declaring class and its subclasses, but not through an instance from outside. When child classes need access to inherited data, "protected" can be noticeably useful.

class User {
    protected name = "Swarup";
}

class PremiumUser extends User {
    getName(): string {
        return this.name;
    }
}


## Explain: "readonly"
The readonly modifier stops further reassignment of data. It allows a property to be assigned when it is declared or initialized in the constructor, but prevents after reassignment.

class User {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}


## Conclusion

To make all-way accessible items use "public". For class-only access use "private". For shared accessible items with subclasses use "protected". For values that should not be reassigned use "readonly". Choosing the right modifiers makes TypeScript classes more safer, clearer, and easier to maintain.
