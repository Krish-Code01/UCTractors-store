import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";
import getProducts from "@/actions/get-products";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filter";
import Banner from "@/components/banner";
import getCompany from "@/actions/get-company";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

interface CompanyPageProps {
  params: {
    companyId: string;
  };
  searchParams: {
    model: string;
    tyre: string;
    condition: string;
  };
}
const CompanyPage: React.FC<CompanyPageProps> = async ({
  params,
  searchParams,
}) => {
  const tyreList = ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%"];
  const modelList = [
    "Less than 2 yr",
    "Less than 5 yr",
    "Less than 10 yr",
    "Less than 20 rs",
  ];
  const conditionList = ["Excellent", "Like New", "Perfect", "Good", "Poor"];
  const company = await getCompany(params.companyId);
  const products = await getProducts({
    companyId: params.companyId,
    model: searchParams.model,
    condition: searchParams.condition,
    tyre: searchParams.tyre,
  });
  console.log(products);
  return (
    <div className="bg-white">
      <Container>
        <Banner data={company.banner} />
        <Separator />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="p-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              tyre={tyreList}
              model={modelList}
              condition={conditionList}
            />
            <div className="hidden lg:block">
              <Filter valueKey="tyre" name="Tyre" data={tyreList} />
              <Filter valueKey="model" name="Model" data={modelList} />
              <Filter
                valueKey="condition"
                name="Condition"
                data={conditionList}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(item => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CompanyPage;
