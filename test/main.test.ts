import main from "../src/main";

describe("Main", () => {
  test("execute", () => {
    const input = "this is a test";
    expect(main.execute(input)).toEqual(input);
  });
});
