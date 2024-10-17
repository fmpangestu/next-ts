import { fetcher } from "@/lib/swr/fetcher";
import { productType } from "@/Types/product.type";
import DetailProductPage from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProduct = () => {
  //? client
  // const DetailProduct = ({ product }: { product: productType }) => {
  const { query } = useRouter(); //? tadinya kan ya tidak di rustering {} jaadi ya harus panggil query.id karena sudah jadi ya langsung saja namaa variabelnya
  //? id itu ambil kaarena nama filenya sih atau alias nya

  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );
  console.log(data);

  return (
    <>
      {/* //? client */}
      <DetailProductPage product={isLoading ? "" : data.data} />
      {/* //?server side and static props */}
      {/* <DetailProductPage product={product} /> */}
    </>
  );
};

export default DetailProduct;
//? server side rendering
export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();
  // //   console.log(response.data);
  return {
    props: {
      product: response.data,
    },
  };
}
//? daftarin dlu sebagai params karena getstaticpath
// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product`);
//   const response = await res.json();
//   const paths = response.data.map((product: productType) => ({
//     params: {
//       product: product.id,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
// //? static generation
// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
