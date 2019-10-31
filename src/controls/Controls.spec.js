import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "../controls/Controls";

  test ("provide buttons to toggle the closed and locked states", () => {
    const wrapper = rtl.render(<Controls closed={true} locked={true} />);
    const btn = wrapper.container.lastElementChild.querySelector("button");
    expect(rtl.fireEvent.click(btn)).toBeTruthy();
    expect(btn.className).toBe("toggle-btn");
    expect(wrapper).toBeTruthy();
  });

  test ("buttons text changes to reflect the state the door will be in if clicked", () => {
    const wrapper = rtl.render(<Controls />);
    const btn = wrapper.container.lastElementChild.querySelector("button");
    expect(rtl.fireEvent.click(btn));
    expect(btn.textContent).toBe("Lock Gate" || "Unlock Gate");
  });

  test ("the closed toggle button is disabled if the gate is locked", () => {
    const wrapper = rtl.render(<Controls />);
    const btn = wrapper.container.lastElementChild.querySelectorAll("button")[1];
    expect(rtl.fireEvent.click(btn));
    expect(btn.disabled).not.toBeTruthy();
  });

  test ("the closed toggle button is disabled if the gate is locked", () => {
    const wrapper = rtl.render(<Controls />);
    const btn = wrapper.container.lastElementChild.querySelectorAll("button")[0];
    expect(rtl.fireEvent.click(btn));
    expect(btn.disabled).toBeTruthy();
  });
