import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("56928f50-4d85-4943-be72-c575fdd9347e");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner
          data={banner}
          description1={
            "Welcome to our premier online platform dedicated to tractor reselling. Discover an extensive collection of high-quality, pre-owned tractors that are ready to serve your agricultural needs. Our e-commerce website offers a seamless experience for farmers, enthusiasts, and businesses looking to upgrade their farming equipment."
          }
          description2={
            "Whether you're searching for compact tractors, utility tractors, or specialized models, our curated selection showcases a diverse range of brands, sizes, and features. Each tractor has been carefully inspected and certified, ensuring reliability and performance. Our user-friendly interface allows you to easily navigate through detailed product listings, specifications, and pricing."
          }
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
