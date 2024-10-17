// import ProductPage from "@/pages/product";
import ProductPage from "@/pages/product";
import { render } from "@testing-library/react";
jest.mock("next/router", () => {
  return {
    userRouter() {
      return {
        route: "/product",
        pathname: "",
        query: "",
        asPath: "",
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(),
        prefetch: jest.fn(() => null),
        isReady: true,
      };
    },
  };
});
describe("Product Page", () => {
  it("render product page", () => {
    const page = render(<ProductPage />);
    expect(page).toMatchSnapshot();
  });
});
