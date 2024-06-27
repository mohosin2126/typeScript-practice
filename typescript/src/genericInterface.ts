{
interface User<T> {
    name: string;
    computer: {
        brand: string;
        model: string;
        price: number;
    };
    smartWatch: T; // Use generic type T for smartWatch
}

// Declare a variable `user` of type User<string>
const user: User<string> = {
    name: "mohosin",
    computer: {
        brand: "apple",
        model: "macbook",
        price: 1000000
    },
        smartWatch:"apple"
    }

}




