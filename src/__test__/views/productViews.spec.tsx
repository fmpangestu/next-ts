import React from "react";
import { render, screen } from "@testing-library/react";
import ProductViews from "@/views/product";
import { productType } from "@/Types/product.type";

const mockProducts: productType[] = [
  {
    id: 1,
    name: "Product 1",
    image: "/product1.jpg",
    category: "Category 1",
    price: 10000,
  },
  {
    id: 2,
    name: "Product 2",
    image: "/product2.jpg",
    category: "Category 2",
    price: 20000,
  },
];

describe("ProductViews", () => {
  it("renders products correctly", () => {
    render(<ProductViews products={mockProducts} />);
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });
});
