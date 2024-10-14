import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <div>keren shop</div>
      <p>
        paage:{" "}
        {query.shop
          ? `${query.shop[0]}${query.shop[1] ? " - " + query.shop[1] : ""}`
          : ""}
      </p>
    </div>
  );
};

export default ShopPage;
