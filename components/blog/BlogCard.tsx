"use client";
import React from "react";
import Image from "next/image";
import {BlogScroll} from "@/components/ui/BlogScroll";

const content = [
    {
        title: "Java is a versatile programming language",
        description: <>
            Java, a high-level, object-oriented programming language, has been a cornerstone of the software development world for decades. Its write once, run anywhere (WORA) principle, platform independence, and robust ecosystem have made it a popular choice for developers across various domains. Since its introduction by Sun Microsystems in 1995, Java has evolved through numerous versions while maintaining backward compatibility. Its extensive standard library, automatic memory management through garbage collection, and strong type system contribute to building reliable, scalable applications ranging from mobile apps to enterprise systems. The Java Virtual Machine (JVM) enables Java bytecode to run on any device with a JVM implementation.....{" "}
            <a className="underline text-blue-400" href="https://medium.com/@sandundil2002/java-is-a-versatile-programming-language-7b7edcdc29c1">Read Full Article</a>
        </>,
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/Java-blog.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Object oriented programming in java",
        description: <>
            Object-Oriented Programming (OOP) is a programming paradigm that uses objects to design applications and computer programs. The idea is to use objects that encapsulate data and functions together to create modular and reusable code. Java, as a powerful and widely-used programming language, adheres to the OOP principles, making it an essential language for software developers to master. Java implements the four fundamental OOP concepts: encapsulation, inheritance, polymorphism, and abstraction. Classes in Java serve as blueprints for objects, defining their structure and behavior. Encapsulation protects data through access modifiers, while inheritance enables code reuse through class hierarchies. Polymorphism allows objects to take multiple forms through method overloading and overriding, and abstraction simplifies complex systems by focusing on essential properties. These features collectively make Java an excellent language for learning and applying OOP principles in real-world applications.....{" "}
            <a className="underline text-blue-400"  href="https://medium.com/@sandundil2002/object-oriented-programming-in-java-1997513fbf2f">Read Full Article</a>
        </>,
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/OOP-blog.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "Understanding react hooks",
        description: <>
            React revolutionized the way we build user interfaces, and with the introduction of Hooks in React 16.8, the framework took another significant leap forward. Hooks allow function components to access state and other React features without writing a class. This change has dramatically simplified code structure, improved reusability, and made React development more intuitive. The useState hook manages local component state, while useEffect handles side effects like data fetching and DOM manipulation. useContext provides access to React context API without nested components, and useReducer offers Redux-like state management for complex state logic. Custom hooks enable developers to extract component logic into reusable functions, promoting code sharing across applications. Advanced hooks like useCallback and useMemo optimize performance by memoizing functions and values. By embracing hooks, developers can write cleaner, more maintainable code while following React compositional pattern, leading to more efficient development workflows and better user experiences.....{" "}
            <a className="underline text-blue-400" href="https://medium.com/@sandundil2002/understanding-react-hooks-01c252828b27">Read Full Article</a>
        </>,
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
                <Image
                    src="/images/react-blog.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    }
];

export function BlogCard() {
    return (
        <div className="w-full">
            <BlogScroll content={content} />
        </div>
    );
}