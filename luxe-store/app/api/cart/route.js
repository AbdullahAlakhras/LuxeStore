import * as repo from "../../../repos/repository.js";

export async function GET(request, { params }){
    const cartItems=await repo.getCartItems();
    return Response.json(cartItems);
};

export async function POST(request, { params }){
    const props= await request.json();
    const nameProduct=props.nameProduct;
    const price=props.price;
    const quantity=props.quantity;
    const cartItem=await repo.addCartItem(nameProduct,price,quantity);
    return Response.json(cartItem);
};

export async function DELETE(request, { params }){
    const cartItems=await repo.removeAllCartItems();
    return Response.json(cartItems);
};