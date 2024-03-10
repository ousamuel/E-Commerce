"use client";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import Sidebar from "../../components/Sidebar";
import { Link, Image, Button } from "@nextui-org/react";
import {
  ItemObject,
  ItemObjectsList,
  CommentObject,
  CommentList,
} from "../../staticData";
import { useEffect, useState } from "react";
import { Comme } from "next/font/google";

export default function GroupPage({ params }: { params: any }) {
  let rating = 4;
  let price = 50;
  let id: number = parseInt(params.productName);
  let idLen: number = id.toString().length;
  const productName: string = params.productName.slice(idLen + 1);
  // this parseInt grabs the id, assuming the url contains /id + "-" + productName

  let allReviews: number[] = [150, 80, 2, 0, 2];
  let totalReviews = allReviews.reduce((a, b) => a + b, 0);

  const [commentStack, setCommentStack] = useState<number>(0);

  let totalComments: number = CommentList.length;
  const incrementComments: (increment: boolean) => void = function (
    increment: boolean
  ): void {
    if (increment && commentStack * 3 <= totalComments - 3) {
      setCommentStack((prevState) => prevState + 1);
    } else if (!increment && commentStack > 0) {
      setCommentStack((prevState) => prevState - 1);
    }
  };
  async function postTodo() {
    try {
      const restOperation = post({
        apiName: "testAPI",
        path: "/test",
        options: {
          body: {
            message: "Mow the lawn",
          },
        },
      });

      const { body } = await restOperation.response;
      const response = await body.json();

      console.log("POST call succeeded");
      console.log(response);
    } catch (e) {
      console.log("POST call failed: ", e);
      throw e; // Rethrow the error so it can be caught outside of this function
    }
  }

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
          <h4 className="capitalize font-extrabold">
            black cherry hybrid {productName}
          </h4>

          <div className="product-text flex w-full h-full">
            <main className="h-[100%] min-w-[50%]">
              <div className="flex py-1">
                <Image
                  width={115}
                  src={`/imgs/${
                    5 - allReviews.indexOf(Math.max(...allReviews))
                  }-star.png`}
                  alt="stars"
                />
                <p className="pl-2 items-baseline">
                  {allReviews.reduce((a: number, b: number) => a + b, 0)}{" "}
                  reviews
                </p>
              </div>
              {/* price, reviews, etc */}
              <section className="my-2">
                <p>text? idk</p>
                <p>text? idk</p>
                <h5 className="text-red-600 font-extrabold">
                  ${price.toFixed(2)}
                </h5>
              </section>
              <Button
                disableRipple
                className="hover:bg-green-500 bg-green-600 p-2 rounded-lg uppercase font-bold text-white"
              >
                Add to cart
              </Button>
              {params.availability ? (
                <div>nice</div>
              ) : (
                <div className="flex items-center">
                  <h6 className="text-red-500 bg-red-200 rounded-md px-2 py-1">
                    Out of Stock
                  </h6>
                  <p className="pl-1 text-gray-600 hover:underline hover:cursor-pointer">
                    Alert me when this item is back in store
                  </p>
                </div>
              )}
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
        <div className="flex review-sections border-b pb-5 mb-5">
          <section id="avg-review" className="">
            <Image
              className="min-w-1/2 max-w-[120px]"
              src={`/imgs/${
                5 - allReviews.indexOf(Math.max(...allReviews))
              }-star.png`}
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
          <section id="all-reviews" className="mr-4">
            {allReviews.map((review: number, index: number) => {
              let barWidth = Math.round((review * 100) / totalReviews);
              let maxVotes = Math.max(...allReviews);
              console.log(maxVotes);
              return (
                <div key={index} className="flex justify-between grow-1 ">
                  <section
                    className="flex"
                    style={{
                      width: `${totalReviews + maxVotes}px`,
                      maxWidth: "330px",
                    }}
                  >
                    <Image
                      className="min-w-1/2 max-w-[120px] mr-2"
                      src={`/imgs/${5 - index}-star.png`}
                      alt="avg review"
                    />
                    <p
                      className="green h-3/5 flex my-auto"
                      style={{
                        width: `${barWidth}px`,
                        minWidth: "0.2px",
                        maxWidth: "225px",
                      }}
                    ></p>
                    <p className="ml-2 flex grow-1">{review} votes</p>
                  </section>
                  <p className="ml-7">
                    {Math.round((review * 100) / totalReviews)}%
                  </p>
                  {/* <p className="ml-7 text-center hidden sm:flex">
                    {review} votes
                  </p>
                  <p className="ml-7 text-center flex sm:hidden">
                    {review}
                    <img src="/svgs/filled-star.svg" width="15" />
                  </p> */}
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
        <div
          id="customer-comments"
          className="flex flex-wrap justify-between min-h-[200px] items-center"
        >
          {CommentList.slice(commentStack * 3, commentStack * 3 + 3).map(
            (comment: CommentObject) => {
              console.log(comment.date);
              return (
                <div key={comment.name} className="comment-div">
                  <strong className="flex">
                    {comment.name}{" "}
                    <img className="ml-2" src="/svgs/verified.svg" width={18} />
                  </strong>
                  <p className="text-gray-500">
                    {comment.date.getMonth()}/{comment.date.getDate()}/
                    {comment.date.getFullYear()}
                    <img src={`/imgs/${comment.rating}-star.png`} width={65} />
                  </p>
                  <blockquote className="mt-2">{comment.comment}</blockquote>
                </div>
              );
            }
          )}
        </div>
        <div className="flex justify-center ">
          <img
            className="next-comments-button"
            src="/svgs/2-left.svg"
            width={32}
            onClick={() => setCommentStack(0)}
          />
          <img
            className="next-comments-button"
            src="/svgs/1-left.svg"
            width={32}
            onClick={() => incrementComments(false)}
          />
          <h5 className="text-[#02b33e] font-extrabold mx-2">
            {commentStack + 1}
          </h5>
          <img
            className="next-comments-button"
            src="/svgs/1-right.svg"
            width={32}
            onClick={() => incrementComments(true)}
          />
          <img
            className="next-comments-button"
            src="/svgs/2-right.svg"
            width={32}
            onClick={() => setCommentStack(Math.floor(totalComments / 3))}
          />
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
                <span className="uppercase text-gray-500">{item.name}</span>
                <p>${item.price.toFixed(2)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
