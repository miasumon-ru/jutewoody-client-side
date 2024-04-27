import reviewImgOne from "../../assets/review_img1.jpg"
import reviewImgTwo from "../../assets/review_img2.jpg"


const Testimonial = () => {
    return (
        <div>

            <div className="max-w-lg mx-auto" >
                <h1 className="text-2xl text-center mt-16 mb-8 font-bold text-[#7c7c7d]"> Testimonial </h1>

                <h2 className="text-4xl font-bold text-center"> What out satisfied clients are saying ... </h2>
            </div>


            <div className="flex flex-col md:flex-row gap-4 mt-10">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title text-6xl"> ❝ </h2>
                        <p className="text-[#7c7c7d] text-[16px]" >
                            JuteWoody website offers a delightful array of eco-friendly jute and wooden products. From stylish home decor to sustainable kitchen essentials and artisanal jewelry, each item reflects craftsmanship and natural charm, making it a go-to destination for conscious consumers. </p>
                        <div className=" flex flex-row gap-4 mt-4 ">
                            <div>
                                <img className="w-16 h-16 rounded-full" src={reviewImgOne} alt="" />
                            </div>
                            <div className="">
                                <p className="text-xl font-bold text-[#392917] mb-2"> Rahimuddin </p>
                                <p className="text-[#7c7c7d] text-[16px]"> Banker </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        <h2 className="card-title text-6xl"> ❝ </h2>
                        <p className="text-[#7c7c7d] text-[16px]" >
                            JuteWoody website is a treasure trove of eco-chic delights! From charming home decor to functional kitchenware and exquisite jewelry, each piece exudes earthy elegance and sustainable style. A must-visit for those seeking unique, eco-friendly finds. </p>
                        <div className=" flex flex-row gap-4 mt-4 ">
                            <div>
                                <img className="w-16 h-16 rounded-full" src={reviewImgTwo} alt="" />
                            </div>
                            <div className="">
                                <p className="text-xl font-bold text-[#392917] mb-2"> Rasel Ahmed </p>
                                <p className="text-[#7c7c7d] text-[16px]"> Businessman </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Testimonial;