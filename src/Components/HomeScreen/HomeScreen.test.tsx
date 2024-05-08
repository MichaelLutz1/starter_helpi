import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeScreen } from "./HomeScreen";


describe("ChangeType Component tests", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<HomeScreen page={"Home"} setPage={function (newPage: string): void {
            throw new Error("Function not implemented.");
        } } />);
    });
    test("The HomePage contains both buttons", () => {
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
    test("The HomePage mentions both basic and detailed page", () => {
        expect(screen.getByText(/Basic Quiz/i)).toBeInTheDocument();
        expect(screen.getByText(/Detailed Quiz/i)).toBeInTheDocument();
    })
});