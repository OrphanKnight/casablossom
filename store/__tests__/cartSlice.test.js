import {
  addToCart,
  incrementqty,
  decrementqty,
  removeItem,
  updateCart,
  toggleSelect,
  toggleAllSelected,
  removeSelectedItems,
  cart,
} from "../cartSlice";

const initialState = {
  cartItems: [],
};

describe("cartSlice", () => {
  it("should handle initial state", () => {
    expect(cart(undefined, {})).toEqual(initialState);
  });

  it("should handle addToCart", () => {
    const prevState = {
      cartItems: [],
    };

    const newItem = {
      _uid: "1",
      qty: 1,
      selected: false,
    };

    const nextState = {
      cartItems: [newItem],
    };

    expect(cart(prevState, addToCart(newItem))).toEqual(nextState);
  });

  it("should handle incrementqty", () => {
    const prevState = {
      cartItems: [{ id: "1", qty: 1 }],
    };

    const nextState = {
      cartItems: [{ id: "1", qty: 2 }],
    };

    expect(cart(prevState, incrementqty("1"))).toEqual(nextState);
  });

  it("should handle decrementqty", () => {
    const prevState = {
      cartItems: [{ id: "1", qty: 2 }],
    };

    const nextState = {
      cartItems: [{ id: "1", qty: 1 }],
    };

    expect(cart(prevState, decrementqty("1"))).toEqual(nextState);
  });

  it("should handle removeItem", () => {
    const prevState = {
      cartItems: [{ id: "1", qty: 1 }],
    };

    const nextState = {
      cartItems: [],
    };

    expect(cart(prevState, removeItem("1"))).toEqual(nextState);
  });

  it("should handle updateCart", () => {
    const prevState = {
      cartItems: [],
    };

    const updatedCartItems = [{ id: "1", qty: 1 }];

    const nextState = {
      cartItems: updatedCartItems,
    };

    expect(cart(prevState, updateCart(updatedCartItems))).toEqual(nextState);
  });

  it("should handle toggleSelect", () => {
    const prevState = {
      cartItems: [{ _uid: "1", selected: false }],
    };

    const nextState = {
      cartItems: [{ _uid: "1", selected: true }],
    };

    expect(cart(prevState, toggleSelect("1"))).toEqual(nextState);
  });

  it("should handle toggleAllSelected", () => {
    const prevState = {
      cartItems: [
        { _uid: "1", selected: false },
        { _uid: "2", selected: true },
      ],
    };

    const nextState = {
      cartItems: [
        { _uid: "1", selected: true },
        { _uid: "2", selected: true },
      ],
    };

    expect(cart(prevState, toggleAllSelected(true))).toEqual(nextState);
  });

  it("should handle removeSelectedItems", () => {
    const prevState = {
      cartItems: [
        { _uid: "1", selected: true },
        { _uid: "2", selected: false },
      ],
    };

    const nextState = {
      cartItems: [{ _uid: "2", selected: false }],
    };

    expect(cart(prevState, removeSelectedItems())).toEqual(nextState);
  });
});
