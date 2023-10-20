import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./cartitem.css";

const CartItem = () => {
    return (
    <div className="p-5 shadow-2xl border rounded-md bg-white boxshadowcart ">
                <div className="boxshadowcart">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/l0wrafk0/dress/l/2/o/3xl-m2s13003-peach-madame-original-imagchhhwbypcann.jpeg?q=70" alt="" />
            </div>
            <div className=" ml-5 space-y-1">
          <p className="font-semibold">Women Asymmetric Pink Dress</p>
          <p className="opacity-70">Size:L, White</p>
          <p className="opacity-70 mt-2">Seller:  Seller:Asymmetric</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">$99</p>
            <p className="font-semibold text-lg">
            $1999
            </p>
            <p className="text-green-600 font-semibold">
             70%off
            </p>
            </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton color="primary" >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">2</span>
          <IconButton color="primary" >
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          <Button  variant="text">
            Remove
          </Button>
          
        </div>
      </div>
      </div>
      </div>
      
      
    );
};

export default CartItem;
