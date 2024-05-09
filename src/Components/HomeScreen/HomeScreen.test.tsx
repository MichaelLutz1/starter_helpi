import React from "react";
import { render, screen } from "@testing-library/react";
import { HomeScreen } from "./HomeScreen";


describe("HomeScreen Component tests", () => {
    test("The HomePage contains both buttons", () => {
        render(<HomeScreen page={"Home"} setPage={function (newPage: string): void {
            throw new Error("Function not implemented.");
        } } apiKey={""} />);
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });
    test("The HomePage mentions both basic and detailed page", () => {
        render(<HomeScreen page={"Home"} setPage={function (newPage: string): void {
            throw new Error("Function not implemented.");
        } } apiKey={""} />);
        expect(screen.getByText(/Basic Quiz/i)).toBeInTheDocument();
        expect(screen.getByText(/Detailed Quiz/i)).toBeInTheDocument();
    })
});