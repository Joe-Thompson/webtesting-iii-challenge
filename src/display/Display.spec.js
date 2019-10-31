import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";
import Controls from "../controls/Controls";

    test ("should display if gate is open/closed and if it is locked/unlocked", () => {
        const wrapper1 = rtl.render(<Display />);
        const wrapper2 = rtl.render(<Controls />);
        expect(wrapper1.queryByText(/Unlocked/i)).toBeInTheDocument();
        rtl.fireEvent.click(wrapper2.queryByText(/Lock Gate/i));
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    });

    test ("should displays 'Closed' if the closed prop is true", () => {
        const wrapper1 = rtl.render(<Display closed={true} />);
        expect(wrapper1.queryByText(/Closed/i)).toBeInTheDocument();
    });

    test ("should displays 'Open' if the closed prop is false", () => {
        const wrapper1 = rtl.render(<Display closed={false} />);
        expect(wrapper1.queryByText(/Open/i)).toBeInTheDocument();
    });

    test ("should displays 'Locked' if the locked prop is true", () => {
        const wrapper1 = rtl.render(<Display locked={true} />);
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    });

    it("should displays 'Unlocked' if the locked prop is false", () => {
        const wrapper1 = rtl.render(<Display locked={false} />);
        expect(wrapper1.queryByText(/Locked/i)).toBeInTheDocument();
    });

    test ("when unlocked or open use the green-led class", () => {
        const wrapper1 = rtl.render(<Display />);
        const expected = wrapper1.container.firstChild.firstChild.childNodes[0].textContent;
        const actual = wrapper1.container.firstChild.firstChild.classList[1];
        expect(actual).toEqual("green-led");
        expect(expected).toEqual("Unlocked");
    });

    test ("when locked or closed use the red-led class", () => {
        let wrapper1 = rtl.render(<Display />);
        let expected = wrapper1.container.firstChild.firstChild.childNodes[0].textContent;
        let actual = wrapper1.container.firstChild.firstChild.classList[0];
        expect(actual).not.toEqual("red-led");
        expect(expected).not.toEqual("Locked");
    });
