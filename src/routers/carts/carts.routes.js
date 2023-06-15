import CartsController from "../../controllers/carts.controller.js";
import CustomRouter from "../customRouter.js";

export class CartsRouter extends CustomRouter {
  init() {
    this.get("/", ["PUBLIC"], CartsController.getCarts);

    this.get("/:cid", ["PUBLIC"], CartsController.getCartById);

    this.post("/", ["PUBLIC"], CartsController.createCart);

    this.post("/:cid/product/:pid", ["PUBLIC"], CartsController.addToCart);

    this.post("/:cid/purchase", ["PUBLIC"], CartsController.purchaseCart)

    this.delete( "/:cid/product/:pid", ["PUBLIC"], CartsController.deleteProduct);

    this.put("/:cid/product/:pid", ["USER", "ADMIN"], CartsController.updateCart);

    this.put("/:cid/clean", ['PUBLIC'], CartsController.cleanCart);

    this.delete("/:cid", ["ADMIN"], CartsController.deleteCart);
  }
}

export default new CartsRouter();