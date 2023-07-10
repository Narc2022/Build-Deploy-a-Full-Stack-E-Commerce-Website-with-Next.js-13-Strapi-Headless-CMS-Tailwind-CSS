import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelativeProducts from '@/components/RelativeProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
                    <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0' ><ProductDetailsCarousel /></div>
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;10
                            </p>
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium  hover:border-black cursor-pointer `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50  `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50  `}>
                                    UK 6
                                </div>
                                <div className={`border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50  `}>
                                    UK 6
                                </div>


                                {/* cursor-not-allowed bg-black/[0.1] opacity-50 */}
                            </div>
                            {/* SIZE END */}
                            {/* SHOW ERROR START */}

                            <div className="text-red-600 mt-1">
                                Size selection is required
                            </div>

                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}
                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"

                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}
                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}
                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</ReactMarkdown>
                            </div>
                        </div>

                    </div>
                    

                </div>
                <RelativeProducts />
            </Wrapper>
        </div>
    )
}

export default ProductDetails