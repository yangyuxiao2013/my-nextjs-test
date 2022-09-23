import React from "react";
import renderer from "react-test-renderer";
import { text } from "./";
// ______________________________________________________
//
describe("atoms/text", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<text />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
