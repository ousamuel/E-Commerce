import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import Sidebar from "../../components/Sidebar";
import { Link, Image, Button } from "@nextui-org/react";
import { ItemObject, ItemObjectsList } from "@/app/staticData";
export default function GroupPage({ params }: { params: any }) {
  let rating = 4;
  let price = 50;

  let id: number = parseInt(params.productName);
  let idLen: number = id.toString().length;
  const productName: string = params.productName.slice(idLen + 1);
  // this parseInt grabs the id, assuming the url contains /id + "-" + productName

  let allReviews: number[] = [50, 24, 20, 11, 2];
  let totalReviews = allReviews.reduce((a, b) => a + b, 0);
  return (
    <div className="container">
      <Header />
      {/* <div className="subheader">
        {" "}
        <h2 className="font-bold">Product</h2>
      </div> */}
      <div className="product-container items-center">
        <Image className="min-w-[250px] max-w-[25vw]" src="/imgs/random1.png" />
        <div className="product-details">
          <h4 className="capitalize">black cherry hybrid {productName}</h4>

          <div className="product-text flex w-full h-full">
            <main className="h-[100%] min-w-[50%]">
              <div className="flex">
                <Image
                  width={125}
                  src={`imgs/${rating}-star.png`}
                  alt="reviews"
                />
                (__ reviews)
              </div>
              {/* price, reviews, etc */}
              <section className="my-2">
                <p>text? idk</p>
                <p>text? idk</p>
                <h5 className="text-rose-700 font-extrabold">
                  ${price.toFixed(2)}
                </h5>
              </section>
              <Button
                disableRipple
                className="hover:bg-green-500 bg-green-600 p-2 rounded-lg uppercase font-bold text-white"
              >
                Add to cart
              </Button>
            </main>
            <aside className="grow text-wrap">
              randomtext descrip tionrandom textdesc riptionrandomtext
              descriptionr andomtex tdescriptionran domtextde criptionran
              {/* domtextd escriptionrandomtextde scriptionrandomtextdesc */}
              {/* riptionrand omtextde scriptionrandomtextdescrip tionrandomtex */}
              {/* tdescripti onrandom textdescriptio nrandomtextdesc ript */}
              {/* ionrandomtextdescription */}
            </aside>
          </div>
        </div>
      </div>
      <div className="below-product-container">
        <h4 className="font-extrabold">Customer Reviews</h4>
        <div className="flex review-sections">
          <section id="avg-review" className="pr-5 mr-5">
            <Image
              className="min-w-1/2 max-w-[120px]"
              src={`/imgs/${5}-star.png`}
              alt="avg review"
            />
            <p className="pl-1">
              Based on{" "}
              <strong className="underline">
                {allReviews.reduce((a: number, b: number) => a + b, 0)}
              </strong>{" "}
              reviews
            </p>
          </section>
          <section id="all-reviews" className="">
            {allReviews.map((review: number, index: number) => {
              let barWidth = Math.round((review * 100) / totalReviews);
              let maxVotes = Math.max(...allReviews);
              console.log(maxVotes);
              return (
                <div key={index} className="flex justify-between">
                  <section
                    className="flex"
                    style={{
                      width: `${totalReviews + maxVotes}px`,
                      maxWidth: "230px",
                    }}
                  >
                    <Image
                      className="min-w-1/2 max-w-[120px] mr-2"
                      src={`/imgs/${5 - index}-star.png`}
                      alt="avg review"
                    />
                    <p
                      className="green h-3/5 flex my-auto"
                      style={{ width: `${barWidth}px` }}
                    ></p>
                  </section>
                  <p className="ml-7">
                    {Math.round((review * 100) / totalReviews)}%
                  </p>
                  <p className="ml-7">{review} votes</p>
                </div>
              );
            })}
          </section>
          {/* <div id="CREATING REVIEW STARS" className='flex'>
            <Image src='svgs/empty-star.svg'/>
            <Image src='svgs/empty-star.svg'/>
            <Image src='svgs/empty-star.svg'/>
            <Image src='svgs/empty-star.svg'/>
            <Image src='svgs/empty-star.svg'/>
          </div> */}
        </div>

        <h4 className="font-extrabold">Related Products</h4>
        <div className="related-products-container">
          {ItemObjectsList.map((item: ItemObject) => {
            return (
              <Link
                key={item.name}
                href={`/product-details/${item.id + "-" + item.name}`}
                className="product-div"
              >
                <Image className="w-4/5 m-auto" src="/imgs/random1.png" />
                <span>{item.name}</span>
                <span> eye</span>
                <p>${item.price.toFixed(2)}</p>
              </Link>
            );
          })}
          {/* <div className="related-product-div">
          <Image
            className="min-w-[100px] max-w-[15vw]"
            src="/imgs/random1.png"
          />
          <span>text</span>
          <span> eye</span>
          <p>price</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}
