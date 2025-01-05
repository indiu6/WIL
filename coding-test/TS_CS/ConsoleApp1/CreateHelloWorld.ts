function createHelloWorld(): (...args: any[]) => string {
    return function (...args: any[]): string {
        return "Hello World"; // 어떤 인자가 와도 "Hello World"를 반환
    };
}

// 사용 예시
const f = createHelloWorld();
console.log(f()); // 출력: "Hello World"
console.log(f({}, null, 42)); // 출력: "Hello World"
