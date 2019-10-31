import React from "react";
import * as rtl from "@testing-library/react";
import Dashboard from './Dashboard';

    test ("should match snapshot", () => {
        const wrapper = rtl.render(<Dashboard />);
        expect(wrapper.baseElement).toMatchSnapshot();
    });
