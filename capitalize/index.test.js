import { capitalize } from "./";

describe("Capitalize", () => {
  it("should capitalize every word of the sentence 1", () => {
    const assertion = capitalize("should I capitalize some Stuff");
    const expected = "Should I Capitalize Some Stuff";

    expect(assertion).toEqual(expected);
  });
});
