const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" alt="" />
            </div>
            <div className=" ml-5 space-y-1 ">
                <p className=" font-semibold">Women Asymmetric Pink Dress</p>
                <p>Size:L,white</p>
                <p className=" opacity-70 "></p>
                <p className=" opacity-70 mt-2"> </p>

            </div>
        </div>
    );
};

export default CartItem;
