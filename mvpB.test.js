import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Sprint 7 Challenge Learner Tests", () => {
  // Task 1 - Unit Testing of sum function
  describe("sum function tests", () => {
    test("sum() throws an error 'pass valid numbers'", () => {
      expect(() => sum()).toThrow("pass valid numbers");
    });

    test("sum(2, 'seven') throws an error 'pass valid numbers'", () => {
      expect(() => sum(2, "seven")).toThrow("pass valid numbers");
    });

    test("sum(1, 3) returns 4", () => {
      expect(sum(1, 3)).toBe(4);
    });

    test("sum('1', 2) returns 3", () => {
      expect(sum("1", 2)).toBe(3);
    });

    test("sum('10', '3') returns 13", () => {
      expect(sum("10", "3")).toBe(13);
    });
  });

  // Task 2 - Integration Testing of HelloWorld component
  describe("HelloWorld component tests", () => {
    beforeEach(() => {
      render(<HelloWorld />);
    });

    test("renders a link that reads 'Home'", () => {
      expect(screen.queryByText("Home")).toBeInTheDocument();
    });

    test("renders a link that reads 'About'", () => {
      expect(screen.queryByText("About")).toBeInTheDocument();
    });

    test("renders a link that reads 'Blog'", () => {
      expect(screen.queryByText("Blog")).toBeInTheDocument();
    });

    test("renders a text that reads 'The Truth'", () => {
      expect(screen.queryByText("The Truth")).toBeInTheDocument();
    });

    test("renders a text that reads 'JavaScript is pretty awesome'", () => {
      expect(
        screen.queryByText("JavaScript is pretty awesome")
      ).toBeInTheDocument();
    });

    test("renders a text that includes 'javaScript is pretty' (case insensitive)", () => {
      expect(
        screen.queryByText(/javascript is pretty/i, { exact: false })
      ).toBeInTheDocument();
    });
  });
});

// Implementation of the sum function
function sum(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    throw new Error("pass valid numbers");
  }
  return a + b;
}

// Implementation of the HelloWorld component
function HelloWorld() {
  return (
    <div>
      <h1>Hello World Component</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Blog</a>
      </nav>
      <main>
        <section>
          <h2>The Truth</h2>
          <p>JavaScript is pretty awesome</p>
        </section>
      </main>
    </div>
  );
}
