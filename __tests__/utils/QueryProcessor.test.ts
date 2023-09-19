import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "andrew";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "kylechen"
          ));
    });

    test('should return player name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "ka"
          ));
    });

    test('should return sum', () => {
        const query = "What is 14 plus 94?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "108"
          ));
    });
    test('should return max', () => {
        const query = "Which of the following numbers is the largest: 60, 67, 84?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "84"
          ));
    });
});