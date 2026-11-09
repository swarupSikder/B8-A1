------------------------------------
Union and Intersection in TypeScript
------------------------------------


## Introduction
TypeScript union and intersection help user to experience and represent precise data.
1. A union (|) means a value can be one of several types. 
2. An intersection (&) combines multiple types into one type that must satisfy all of them. 
Both of these are useful while sharing common information but have role-specific details.


## Practical Example
Imagine an app with students and mentors. Both
have an ID and name, but mentors also have a permission level.

==>> First, define the shared and role-specific types:
type User = {
    id: number;
    name: string;
};

type Student = User & {
    role: "student";
    ranking: number;
};

type Mentor = User & {
    role: "mentor";
    accesses: string[];
};

Here, & combines User with each role-specific object.
Therefore, a Student must contain the shared properties and
ranking, while an Mentor must contain the shared properties and
accesses.

==>> Use a union to represent either kind of user:
type User = Student | Mentor;

let describeUser = (user: User): string =>  {
    if (user.role === "mentor") {
        return `${user.name} has ${user.accesses.length} accesses`;
    }

    return `${user.name} has ${user.ranking} rank`;
}

The | allows the function to accept either a student or a mentor.


## Conclusion
Use intersections (&) to combine required properties and unions (|)
to allow one of several valid roles. Together, they create flexible,
type-safe models without using any.