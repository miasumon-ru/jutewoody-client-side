import { Zoom } from "react-awesome-reveal";

const Accordion = () => {

    return (

        <div>

            <div className="max-w-lg mx-auto" >

                <h1 className="text-4xl text-center mt-16 mb-12 font-bold">

                    <Zoom>

                        Frequently Asked Questions

                    </Zoom>

                </h1>


            </div>

            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl  font-semibold ">
                        How To Order Custom Product ?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[16px] font-bold text-[#6b645d] " >
                            Ordering a custom jute product from juteWoody is a seamless process tailored to your specific needs. Begin by reaching out to us through our website or contact channels, provide detailed specifications for your desired product, including dimensions, design preferences, and any specific features you require. </p>

                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl  font-semibold ">
                        How Long My Product Crafted ?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[16px] font-bold text-[#6b645d] ">
                            Upon receiving your order and specifications, we will provide you with an estimated production timeline. Rest assured, we prioritize quality craftsmanship and will work diligently to ensure your product is crafted to your satisfaction within the specified timeframe.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl  font-semibold  ">
                        How Long Guarante My Product ?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[16px] font-bold text-[#6b645d] ">

                            We stand behind the quality of our products at juteWoody and offer a guarantee to ensure your satisfaction. The duration of the guarantee varies depending on the specific product and its intended use.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl  font-semibold  ">
                        How Does Ship To My Address ?
                    </div>
                    <div className="collapse-content">
                        <p className="text-[16px] font-bold text-[#6b645d] ">

                            At juteWoody, we ensure a smooth and secure shipping process to deliver your product to your address. Once your custom jute product is crafted and ready for shipment, we carefully package it to protect against damage during transit. We partner with trusted shipping carriers to provide reliable delivery services to your location.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Accordion;