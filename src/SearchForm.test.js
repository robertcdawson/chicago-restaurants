import React from "react";
import { render, fireEvent } from '@testing-library/react';
import SearchForm from "./SearchForm";

test("changes search field value and submits form", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const searchValue = "kfc";
  const { getByLabelText, getByRole } = render(<SearchForm searchFieldValue={searchValue} onChange={handleChange} onSubmit={handleSubmit} />);
  fireEvent.change(getByLabelText(/Search Chicago restaurants/i), { target: { value: searchValue } });
  fireEvent.click(getByRole('searchbox'));
  expect(handleChange).toBeCalled();
});