/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCartItemsInput = {
  id?: string | null,
  cartID: string,
  quantity?: number | null,
  productID?: string | null,
};

export type ModelCartItemsConditionInput = {
  cartID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartItemsConditionInput | null > | null,
  or?: Array< ModelCartItemsConditionInput | null > | null,
  not?: ModelCartItemsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type CartItems = {
  __typename: "CartItems",
  id: string,
  cartID: string,
  quantity?: number | null,
  productID?: string | null,
  productmenus?: ModelProductMenuCartItemsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductMenuCartItemsConnection = {
  __typename: "ModelProductMenuCartItemsConnection",
  items:  Array<ProductMenuCartItems | null >,
  nextToken?: string | null,
};

export type ProductMenuCartItems = {
  __typename: "ProductMenuCartItems",
  id: string,
  cartItemsId: string,
  productMenuId: string,
  cartItems: CartItems,
  productMenu: ProductMenu,
  createdAt: string,
  updatedAt: string,
};

export type ProductMenu = {
  __typename: "ProductMenu",
  id: string,
  productName?: string | null,
  description?: string | null,
  price?: number | null,
  stockQuantity?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
  ProductReviews?: ModelProductReviewsConnection | null,
  ProductImages?: ModelProductImagesConnection | null,
  OrderItems?: ModelProductMenuOrderItemsConnection | null,
  CartItems?: ModelProductMenuCartItemsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductReviewsConnection = {
  __typename: "ModelProductReviewsConnection",
  items:  Array<ProductReviews | null >,
  nextToken?: string | null,
};

export type ProductReviews = {
  __typename: "ProductReviews",
  id: string,
  userID: string,
  productID: string,
  createdAt?: string | null,
  rating?: number | null,
  comment?: string | null,
  updatedAt: string,
};

export type ModelProductImagesConnection = {
  __typename: "ModelProductImagesConnection",
  items:  Array<ProductImages | null >,
  nextToken?: string | null,
};

export type ProductImages = {
  __typename: "ProductImages",
  id: string,
  productID: string,
  altText?: string | null,
  imagePath?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductMenuOrderItemsConnection = {
  __typename: "ModelProductMenuOrderItemsConnection",
  items:  Array<ProductMenuOrderItems | null >,
  nextToken?: string | null,
};

export type ProductMenuOrderItems = {
  __typename: "ProductMenuOrderItems",
  id: string,
  orderItemsId: string,
  productMenuId: string,
  orderItems: OrderItems,
  productMenu: ProductMenu,
  createdAt: string,
  updatedAt: string,
};

export type OrderItems = {
  __typename: "OrderItems",
  id: string,
  orderID: string,
  quantity?: number | null,
  purchasePrice?: number | null,
  productID?: string | null,
  productmenus?: ModelProductMenuOrderItemsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCartItemsInput = {
  id: string,
  cartID?: string | null,
  quantity?: number | null,
  productID?: string | null,
};

export type DeleteCartItemsInput = {
  id: string,
};

export type CreateShoppingCartInput = {
  id?: string | null,
  userID?: string | null,
};

export type ModelShoppingCartConditionInput = {
  userID?: ModelIDInput | null,
  and?: Array< ModelShoppingCartConditionInput | null > | null,
  or?: Array< ModelShoppingCartConditionInput | null > | null,
  not?: ModelShoppingCartConditionInput | null,
};

export type ShoppingCart = {
  __typename: "ShoppingCart",
  id: string,
  userID?: string | null,
  CartItems?: ModelCartItemsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCartItemsConnection = {
  __typename: "ModelCartItemsConnection",
  items:  Array<CartItems | null >,
  nextToken?: string | null,
};

export type UpdateShoppingCartInput = {
  id: string,
  userID?: string | null,
};

export type DeleteShoppingCartInput = {
  id: string,
};

export type CreateOrderItemsInput = {
  id?: string | null,
  orderID: string,
  quantity?: number | null,
  purchasePrice?: number | null,
  productID?: string | null,
};

export type ModelOrderItemsConditionInput = {
  orderID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  purchasePrice?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelOrderItemsConditionInput | null > | null,
  or?: Array< ModelOrderItemsConditionInput | null > | null,
  not?: ModelOrderItemsConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrderItemsInput = {
  id: string,
  orderID?: string | null,
  quantity?: number | null,
  purchasePrice?: number | null,
  productID?: string | null,
};

export type DeleteOrderItemsInput = {
  id: string,
};

export type CreateOrdersInput = {
  id?: string | null,
  userID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  orderStatus?: string | null,
};

export type ModelOrdersConditionInput = {
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderStatus?: ModelStringInput | null,
  and?: Array< ModelOrdersConditionInput | null > | null,
  or?: Array< ModelOrdersConditionInput | null > | null,
  not?: ModelOrdersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Orders = {
  __typename: "Orders",
  id: string,
  userID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  orderStatus?: string | null,
  OrderItems?: ModelOrderItemsConnection | null,
};

export type ModelOrderItemsConnection = {
  __typename: "ModelOrderItemsConnection",
  items:  Array<OrderItems | null >,
  nextToken?: string | null,
};

export type UpdateOrdersInput = {
  id: string,
  userID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  orderStatus?: string | null,
};

export type DeleteOrdersInput = {
  id: string,
};

export type CreateProductReviewsInput = {
  id?: string | null,
  userID: string,
  productID: string,
  createdAt?: string | null,
  rating?: number | null,
  comment?: string | null,
};

export type ModelProductReviewsConditionInput = {
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelProductReviewsConditionInput | null > | null,
  or?: Array< ModelProductReviewsConditionInput | null > | null,
  not?: ModelProductReviewsConditionInput | null,
};

export type UpdateProductReviewsInput = {
  id: string,
  userID?: string | null,
  productID?: string | null,
  createdAt?: string | null,
  rating?: number | null,
  comment?: string | null,
};

export type DeleteProductReviewsInput = {
  id: string,
};

export type CreateProductImagesInput = {
  id?: string | null,
  productID: string,
  altText?: string | null,
  imagePath?: string | null,
};

export type ModelProductImagesConditionInput = {
  productID?: ModelIDInput | null,
  altText?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  and?: Array< ModelProductImagesConditionInput | null > | null,
  or?: Array< ModelProductImagesConditionInput | null > | null,
  not?: ModelProductImagesConditionInput | null,
};

export type UpdateProductImagesInput = {
  id: string,
  productID?: string | null,
  altText?: string | null,
  imagePath?: string | null,
};

export type DeleteProductImagesInput = {
  id: string,
};

export type CreateProductMenuInput = {
  id?: string | null,
  productName?: string | null,
  description?: string | null,
  price?: number | null,
  stockQuantity?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
};

export type ModelProductMenuConditionInput = {
  productName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  stockQuantity?: ModelIntInput | null,
  createdTime?: ModelStringInput | null,
  updatedTime?: ModelStringInput | null,
  and?: Array< ModelProductMenuConditionInput | null > | null,
  or?: Array< ModelProductMenuConditionInput | null > | null,
  not?: ModelProductMenuConditionInput | null,
};

export type UpdateProductMenuInput = {
  id: string,
  productName?: string | null,
  description?: string | null,
  price?: number | null,
  stockQuantity?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
};

export type DeleteProductMenuInput = {
  id: string,
};

export type CreateUsersInput = {
  id?: string | null,
  username?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  rewardPoints?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
  usersShoppingCartId?: string | null,
};

export type ModelUsersConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  passwordHash?: ModelStringInput | null,
  rewardPoints?: ModelIntInput | null,
  createdTime?: ModelStringInput | null,
  updatedTime?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
  usersShoppingCartId?: ModelIDInput | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  username?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  rewardPoints?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
  Orders?: ModelOrdersConnection | null,
  ProductReviews?: ModelProductReviewsConnection | null,
  ShoppingCart?: ShoppingCart | null,
  createdAt: string,
  updatedAt: string,
  usersShoppingCartId?: string | null,
};

export type ModelOrdersConnection = {
  __typename: "ModelOrdersConnection",
  items:  Array<Orders | null >,
  nextToken?: string | null,
};

export type UpdateUsersInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  rewardPoints?: number | null,
  createdTime?: string | null,
  updatedTime?: string | null,
  usersShoppingCartId?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateProductMenuCartItemsInput = {
  id?: string | null,
  cartItemsId: string,
  productMenuId: string,
};

export type ModelProductMenuCartItemsConditionInput = {
  cartItemsId?: ModelIDInput | null,
  productMenuId?: ModelIDInput | null,
  and?: Array< ModelProductMenuCartItemsConditionInput | null > | null,
  or?: Array< ModelProductMenuCartItemsConditionInput | null > | null,
  not?: ModelProductMenuCartItemsConditionInput | null,
};

export type UpdateProductMenuCartItemsInput = {
  id: string,
  cartItemsId?: string | null,
  productMenuId?: string | null,
};

export type DeleteProductMenuCartItemsInput = {
  id: string,
};

export type CreateProductMenuOrderItemsInput = {
  id?: string | null,
  orderItemsId: string,
  productMenuId: string,
};

export type ModelProductMenuOrderItemsConditionInput = {
  orderItemsId?: ModelIDInput | null,
  productMenuId?: ModelIDInput | null,
  and?: Array< ModelProductMenuOrderItemsConditionInput | null > | null,
  or?: Array< ModelProductMenuOrderItemsConditionInput | null > | null,
  not?: ModelProductMenuOrderItemsConditionInput | null,
};

export type UpdateProductMenuOrderItemsInput = {
  id: string,
  orderItemsId?: string | null,
  productMenuId?: string | null,
};

export type DeleteProductMenuOrderItemsInput = {
  id: string,
};

export type ModelCartItemsFilterInput = {
  id?: ModelIDInput | null,
  cartID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelCartItemsFilterInput | null > | null,
  or?: Array< ModelCartItemsFilterInput | null > | null,
  not?: ModelCartItemsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelShoppingCartFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelShoppingCartFilterInput | null > | null,
  or?: Array< ModelShoppingCartFilterInput | null > | null,
  not?: ModelShoppingCartFilterInput | null,
};

export type ModelShoppingCartConnection = {
  __typename: "ModelShoppingCartConnection",
  items:  Array<ShoppingCart | null >,
  nextToken?: string | null,
};

export type ModelOrderItemsFilterInput = {
  id?: ModelIDInput | null,
  orderID?: ModelIDInput | null,
  quantity?: ModelIntInput | null,
  purchasePrice?: ModelFloatInput | null,
  productID?: ModelIDInput | null,
  and?: Array< ModelOrderItemsFilterInput | null > | null,
  or?: Array< ModelOrderItemsFilterInput | null > | null,
  not?: ModelOrderItemsFilterInput | null,
};

export type ModelOrdersFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  orderStatus?: ModelStringInput | null,
  and?: Array< ModelOrdersFilterInput | null > | null,
  or?: Array< ModelOrdersFilterInput | null > | null,
  not?: ModelOrdersFilterInput | null,
};

export type ModelProductReviewsFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  rating?: ModelIntInput | null,
  comment?: ModelStringInput | null,
  and?: Array< ModelProductReviewsFilterInput | null > | null,
  or?: Array< ModelProductReviewsFilterInput | null > | null,
  not?: ModelProductReviewsFilterInput | null,
};

export type ModelProductImagesFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  altText?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  and?: Array< ModelProductImagesFilterInput | null > | null,
  or?: Array< ModelProductImagesFilterInput | null > | null,
  not?: ModelProductImagesFilterInput | null,
};

export type ModelProductMenuFilterInput = {
  id?: ModelIDInput | null,
  productName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  stockQuantity?: ModelIntInput | null,
  createdTime?: ModelStringInput | null,
  updatedTime?: ModelStringInput | null,
  and?: Array< ModelProductMenuFilterInput | null > | null,
  or?: Array< ModelProductMenuFilterInput | null > | null,
  not?: ModelProductMenuFilterInput | null,
};

export type ModelProductMenuConnection = {
  __typename: "ModelProductMenuConnection",
  items:  Array<ProductMenu | null >,
  nextToken?: string | null,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  passwordHash?: ModelStringInput | null,
  rewardPoints?: ModelIntInput | null,
  createdTime?: ModelStringInput | null,
  updatedTime?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
  usersShoppingCartId?: ModelIDInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelProductMenuCartItemsFilterInput = {
  id?: ModelIDInput | null,
  cartItemsId?: ModelIDInput | null,
  productMenuId?: ModelIDInput | null,
  and?: Array< ModelProductMenuCartItemsFilterInput | null > | null,
  or?: Array< ModelProductMenuCartItemsFilterInput | null > | null,
  not?: ModelProductMenuCartItemsFilterInput | null,
};

export type ModelProductMenuOrderItemsFilterInput = {
  id?: ModelIDInput | null,
  orderItemsId?: ModelIDInput | null,
  productMenuId?: ModelIDInput | null,
  and?: Array< ModelProductMenuOrderItemsFilterInput | null > | null,
  or?: Array< ModelProductMenuOrderItemsFilterInput | null > | null,
  not?: ModelProductMenuOrderItemsFilterInput | null,
};

export type ModelSubscriptionCartItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cartID?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  productID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCartItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartItemsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionShoppingCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionShoppingCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionShoppingCartFilterInput | null > | null,
};

export type ModelSubscriptionOrderItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderID?: ModelSubscriptionIDInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  purchasePrice?: ModelSubscriptionFloatInput | null,
  productID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderItemsFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrdersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  orderStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductReviewsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionIntInput | null,
  comment?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductReviewsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductReviewsFilterInput | null > | null,
};

export type ModelSubscriptionProductImagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
  altText?: ModelSubscriptionStringInput | null,
  imagePath?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductImagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductImagesFilterInput | null > | null,
};

export type ModelSubscriptionProductMenuFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  stockQuantity?: ModelSubscriptionIntInput | null,
  createdTime?: ModelSubscriptionStringInput | null,
  updatedTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductMenuFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductMenuFilterInput | null > | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  passwordHash?: ModelSubscriptionStringInput | null,
  rewardPoints?: ModelSubscriptionIntInput | null,
  createdTime?: ModelSubscriptionStringInput | null,
  updatedTime?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
};

export type ModelSubscriptionProductMenuCartItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cartItemsId?: ModelSubscriptionIDInput | null,
  productMenuId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductMenuCartItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductMenuCartItemsFilterInput | null > | null,
};

export type ModelSubscriptionProductMenuOrderItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderItemsId?: ModelSubscriptionIDInput | null,
  productMenuId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductMenuOrderItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductMenuOrderItemsFilterInput | null > | null,
};

export type CreateCartItemsMutationVariables = {
  input: CreateCartItemsInput,
  condition?: ModelCartItemsConditionInput | null,
};

export type CreateCartItemsMutation = {
  createCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCartItemsMutationVariables = {
  input: UpdateCartItemsInput,
  condition?: ModelCartItemsConditionInput | null,
};

export type UpdateCartItemsMutation = {
  updateCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCartItemsMutationVariables = {
  input: DeleteCartItemsInput,
  condition?: ModelCartItemsConditionInput | null,
};

export type DeleteCartItemsMutation = {
  deleteCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateShoppingCartMutationVariables = {
  input: CreateShoppingCartInput,
  condition?: ModelShoppingCartConditionInput | null,
};

export type CreateShoppingCartMutation = {
  createShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateShoppingCartMutationVariables = {
  input: UpdateShoppingCartInput,
  condition?: ModelShoppingCartConditionInput | null,
};

export type UpdateShoppingCartMutation = {
  updateShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteShoppingCartMutationVariables = {
  input: DeleteShoppingCartInput,
  condition?: ModelShoppingCartConditionInput | null,
};

export type DeleteShoppingCartMutation = {
  deleteShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderItemsMutationVariables = {
  input: CreateOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type CreateOrderItemsMutation = {
  createOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderItemsMutationVariables = {
  input: UpdateOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type UpdateOrderItemsMutation = {
  updateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderItemsMutationVariables = {
  input: DeleteOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type DeleteOrderItemsMutation = {
  deleteOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrdersMutationVariables = {
  input: CreateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type CreateOrdersMutation = {
  createOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateOrdersMutationVariables = {
  input: UpdateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type UpdateOrdersMutation = {
  updateOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteOrdersMutationVariables = {
  input: DeleteOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type DeleteOrdersMutation = {
  deleteOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateProductReviewsMutationVariables = {
  input: CreateProductReviewsInput,
  condition?: ModelProductReviewsConditionInput | null,
};

export type CreateProductReviewsMutation = {
  createProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductReviewsMutationVariables = {
  input: UpdateProductReviewsInput,
  condition?: ModelProductReviewsConditionInput | null,
};

export type UpdateProductReviewsMutation = {
  updateProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductReviewsMutationVariables = {
  input: DeleteProductReviewsInput,
  condition?: ModelProductReviewsConditionInput | null,
};

export type DeleteProductReviewsMutation = {
  deleteProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateProductImagesMutationVariables = {
  input: CreateProductImagesInput,
  condition?: ModelProductImagesConditionInput | null,
};

export type CreateProductImagesMutation = {
  createProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductImagesMutationVariables = {
  input: UpdateProductImagesInput,
  condition?: ModelProductImagesConditionInput | null,
};

export type UpdateProductImagesMutation = {
  updateProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductImagesMutationVariables = {
  input: DeleteProductImagesInput,
  condition?: ModelProductImagesConditionInput | null,
};

export type DeleteProductImagesMutation = {
  deleteProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMenuMutationVariables = {
  input: CreateProductMenuInput,
  condition?: ModelProductMenuConditionInput | null,
};

export type CreateProductMenuMutation = {
  createProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMenuMutationVariables = {
  input: UpdateProductMenuInput,
  condition?: ModelProductMenuConditionInput | null,
};

export type UpdateProductMenuMutation = {
  updateProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMenuMutationVariables = {
  input: DeleteProductMenuInput,
  condition?: ModelProductMenuConditionInput | null,
};

export type DeleteProductMenuMutation = {
  deleteProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type CreateProductMenuCartItemsMutationVariables = {
  input: CreateProductMenuCartItemsInput,
  condition?: ModelProductMenuCartItemsConditionInput | null,
};

export type CreateProductMenuCartItemsMutation = {
  createProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMenuCartItemsMutationVariables = {
  input: UpdateProductMenuCartItemsInput,
  condition?: ModelProductMenuCartItemsConditionInput | null,
};

export type UpdateProductMenuCartItemsMutation = {
  updateProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMenuCartItemsMutationVariables = {
  input: DeleteProductMenuCartItemsInput,
  condition?: ModelProductMenuCartItemsConditionInput | null,
};

export type DeleteProductMenuCartItemsMutation = {
  deleteProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMenuOrderItemsMutationVariables = {
  input: CreateProductMenuOrderItemsInput,
  condition?: ModelProductMenuOrderItemsConditionInput | null,
};

export type CreateProductMenuOrderItemsMutation = {
  createProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMenuOrderItemsMutationVariables = {
  input: UpdateProductMenuOrderItemsInput,
  condition?: ModelProductMenuOrderItemsConditionInput | null,
};

export type UpdateProductMenuOrderItemsMutation = {
  updateProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMenuOrderItemsMutationVariables = {
  input: DeleteProductMenuOrderItemsInput,
  condition?: ModelProductMenuOrderItemsConditionInput | null,
};

export type DeleteProductMenuOrderItemsMutation = {
  deleteProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCartItemsQueryVariables = {
  id: string,
};

export type GetCartItemsQuery = {
  getCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCartItemsQueryVariables = {
  filter?: ModelCartItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartItemsQuery = {
  listCartItems?:  {
    __typename: "ModelCartItemsConnection",
    items:  Array< {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CartItemsByCartIDQueryVariables = {
  cartID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCartItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CartItemsByCartIDQuery = {
  cartItemsByCartID?:  {
    __typename: "ModelCartItemsConnection",
    items:  Array< {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetShoppingCartQueryVariables = {
  id: string,
};

export type GetShoppingCartQuery = {
  getShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListShoppingCartsQueryVariables = {
  filter?: ModelShoppingCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShoppingCartsQuery = {
  listShoppingCarts?:  {
    __typename: "ModelShoppingCartConnection",
    items:  Array< {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderItemsQueryVariables = {
  id: string,
};

export type GetOrderItemsQuery = {
  getOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  filter?: ModelOrderItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "ModelOrderItemsConnection",
    items:  Array< {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrderItemsByOrderIDQueryVariables = {
  orderID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrderItemsByOrderIDQuery = {
  orderItemsByOrderID?:  {
    __typename: "ModelOrderItemsConnection",
    items:  Array< {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrdersQueryVariables = {
  id: string,
};

export type GetOrdersQuery = {
  getOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      userID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      orderStatus?: string | null,
      OrderItems?:  {
        __typename: "ModelOrderItemsConnection",
        items:  Array< {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIDQuery = {
  ordersByUserID?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      userID: string,
      createdAt?: string | null,
      updatedAt?: string | null,
      orderStatus?: string | null,
      OrderItems?:  {
        __typename: "ModelOrderItemsConnection",
        items:  Array< {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductReviewsQueryVariables = {
  id: string,
};

export type GetProductReviewsQuery = {
  getProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type ListProductReviewsQueryVariables = {
  filter?: ModelProductReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductReviewsQuery = {
  listProductReviews?:  {
    __typename: "ModelProductReviewsConnection",
    items:  Array< {
      __typename: "ProductReviews",
      id: string,
      userID: string,
      productID: string,
      createdAt?: string | null,
      rating?: number | null,
      comment?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductReviewsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductReviewsByUserIDQuery = {
  productReviewsByUserID?:  {
    __typename: "ModelProductReviewsConnection",
    items:  Array< {
      __typename: "ProductReviews",
      id: string,
      userID: string,
      productID: string,
      createdAt?: string | null,
      rating?: number | null,
      comment?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductReviewsByProductIDQueryVariables = {
  productID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductReviewsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductReviewsByProductIDQuery = {
  productReviewsByProductID?:  {
    __typename: "ModelProductReviewsConnection",
    items:  Array< {
      __typename: "ProductReviews",
      id: string,
      userID: string,
      productID: string,
      createdAt?: string | null,
      rating?: number | null,
      comment?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductImagesQueryVariables = {
  id: string,
};

export type GetProductImagesQuery = {
  getProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductImagesQueryVariables = {
  filter?: ModelProductImagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductImagesQuery = {
  listProductImages?:  {
    __typename: "ModelProductImagesConnection",
    items:  Array< {
      __typename: "ProductImages",
      id: string,
      productID: string,
      altText?: string | null,
      imagePath?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductImagesByProductIDQueryVariables = {
  productID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductImagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductImagesByProductIDQuery = {
  productImagesByProductID?:  {
    __typename: "ModelProductImagesConnection",
    items:  Array< {
      __typename: "ProductImages",
      id: string,
      productID: string,
      altText?: string | null,
      imagePath?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductMenuQueryVariables = {
  id: string,
};

export type GetProductMenuQuery = {
  getProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductMenusQueryVariables = {
  filter?: ModelProductMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductMenusQuery = {
  listProductMenus?:  {
    __typename: "ModelProductMenuConnection",
    items:  Array< {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      username?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      rewardPoints?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      Orders?:  {
        __typename: "ModelOrdersConnection",
        items:  Array< {
          __typename: "Orders",
          id: string,
          userID: string,
          createdAt?: string | null,
          updatedAt?: string | null,
          orderStatus?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ShoppingCart?:  {
        __typename: "ShoppingCart",
        id: string,
        userID?: string | null,
        CartItems?:  {
          __typename: "ModelCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      usersShoppingCartId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductMenuCartItemsQueryVariables = {
  id: string,
};

export type GetProductMenuCartItemsQuery = {
  getProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductMenuCartItemsQueryVariables = {
  filter?: ModelProductMenuCartItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductMenuCartItemsQuery = {
  listProductMenuCartItems?:  {
    __typename: "ModelProductMenuCartItemsConnection",
    items:  Array< {
      __typename: "ProductMenuCartItems",
      id: string,
      cartItemsId: string,
      productMenuId: string,
      cartItems:  {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductMenuCartItemsByCartItemsIdQueryVariables = {
  cartItemsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductMenuCartItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductMenuCartItemsByCartItemsIdQuery = {
  productMenuCartItemsByCartItemsId?:  {
    __typename: "ModelProductMenuCartItemsConnection",
    items:  Array< {
      __typename: "ProductMenuCartItems",
      id: string,
      cartItemsId: string,
      productMenuId: string,
      cartItems:  {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductMenuCartItemsByProductMenuIdQueryVariables = {
  productMenuId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductMenuCartItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductMenuCartItemsByProductMenuIdQuery = {
  productMenuCartItemsByProductMenuId?:  {
    __typename: "ModelProductMenuCartItemsConnection",
    items:  Array< {
      __typename: "ProductMenuCartItems",
      id: string,
      cartItemsId: string,
      productMenuId: string,
      cartItems:  {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductMenuOrderItemsQueryVariables = {
  id: string,
};

export type GetProductMenuOrderItemsQuery = {
  getProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductMenuOrderItemsQueryVariables = {
  filter?: ModelProductMenuOrderItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductMenuOrderItemsQuery = {
  listProductMenuOrderItems?:  {
    __typename: "ModelProductMenuOrderItemsConnection",
    items:  Array< {
      __typename: "ProductMenuOrderItems",
      id: string,
      orderItemsId: string,
      productMenuId: string,
      orderItems:  {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductMenuOrderItemsByOrderItemsIdQueryVariables = {
  orderItemsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductMenuOrderItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductMenuOrderItemsByOrderItemsIdQuery = {
  productMenuOrderItemsByOrderItemsId?:  {
    __typename: "ModelProductMenuOrderItemsConnection",
    items:  Array< {
      __typename: "ProductMenuOrderItems",
      id: string,
      orderItemsId: string,
      productMenuId: string,
      orderItems:  {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductMenuOrderItemsByProductMenuIdQueryVariables = {
  productMenuId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductMenuOrderItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductMenuOrderItemsByProductMenuIdQuery = {
  productMenuOrderItemsByProductMenuId?:  {
    __typename: "ModelProductMenuOrderItemsConnection",
    items:  Array< {
      __typename: "ProductMenuOrderItems",
      id: string,
      orderItemsId: string,
      productMenuId: string,
      orderItems:  {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      productMenu:  {
        __typename: "ProductMenu",
        id: string,
        productName?: string | null,
        description?: string | null,
        price?: number | null,
        stockQuantity?: number | null,
        createdTime?: string | null,
        updatedTime?: string | null,
        ProductReviews?:  {
          __typename: "ModelProductReviewsConnection",
          nextToken?: string | null,
        } | null,
        ProductImages?:  {
          __typename: "ModelProductImagesConnection",
          nextToken?: string | null,
        } | null,
        OrderItems?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        CartItems?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemsFilterInput | null,
};

export type OnCreateCartItemsSubscription = {
  onCreateCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemsFilterInput | null,
};

export type OnUpdateCartItemsSubscription = {
  onUpdateCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionCartItemsFilterInput | null,
};

export type OnDeleteCartItemsSubscription = {
  onDeleteCartItems?:  {
    __typename: "CartItems",
    id: string,
    cartID: string,
    quantity?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingCartFilterInput | null,
};

export type OnCreateShoppingCartSubscription = {
  onCreateShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingCartFilterInput | null,
};

export type OnUpdateShoppingCartSubscription = {
  onUpdateShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteShoppingCartSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingCartFilterInput | null,
};

export type OnDeleteShoppingCartSubscription = {
  onDeleteShoppingCart?:  {
    __typename: "ShoppingCart",
    id: string,
    userID?: string | null,
    CartItems?:  {
      __typename: "ModelCartItemsConnection",
      items:  Array< {
        __typename: "CartItems",
        id: string,
        cartID: string,
        quantity?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuCartItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemsFilterInput | null,
};

export type OnCreateOrderItemsSubscription = {
  onCreateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemsFilterInput | null,
};

export type OnUpdateOrderItemsSubscription = {
  onUpdateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionOrderItemsFilterInput | null,
};

export type OnDeleteOrderItemsSubscription = {
  onDeleteOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderID: string,
    quantity?: number | null,
    purchasePrice?: number | null,
    productID?: string | null,
    productmenus?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnCreateOrdersSubscription = {
  onCreateOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnUpdateOrdersSubscription = {
  onUpdateOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnDeleteOrdersSubscription = {
  onDeleteOrders?:  {
    __typename: "Orders",
    id: string,
    userID: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    orderStatus?: string | null,
    OrderItems?:  {
      __typename: "ModelOrderItemsConnection",
      items:  Array< {
        __typename: "OrderItems",
        id: string,
        orderID: string,
        quantity?: number | null,
        purchasePrice?: number | null,
        productID?: string | null,
        productmenus?:  {
          __typename: "ModelProductMenuOrderItemsConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateProductReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionProductReviewsFilterInput | null,
};

export type OnCreateProductReviewsSubscription = {
  onCreateProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionProductReviewsFilterInput | null,
};

export type OnUpdateProductReviewsSubscription = {
  onUpdateProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductReviewsSubscriptionVariables = {
  filter?: ModelSubscriptionProductReviewsFilterInput | null,
};

export type OnDeleteProductReviewsSubscription = {
  onDeleteProductReviews?:  {
    __typename: "ProductReviews",
    id: string,
    userID: string,
    productID: string,
    createdAt?: string | null,
    rating?: number | null,
    comment?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductImagesSubscriptionVariables = {
  filter?: ModelSubscriptionProductImagesFilterInput | null,
};

export type OnCreateProductImagesSubscription = {
  onCreateProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductImagesSubscriptionVariables = {
  filter?: ModelSubscriptionProductImagesFilterInput | null,
};

export type OnUpdateProductImagesSubscription = {
  onUpdateProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductImagesSubscriptionVariables = {
  filter?: ModelSubscriptionProductImagesFilterInput | null,
};

export type OnDeleteProductImagesSubscription = {
  onDeleteProductImages?:  {
    __typename: "ProductImages",
    id: string,
    productID: string,
    altText?: string | null,
    imagePath?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductMenuSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuFilterInput | null,
};

export type OnCreateProductMenuSubscription = {
  onCreateProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductMenuSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuFilterInput | null,
};

export type OnUpdateProductMenuSubscription = {
  onUpdateProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductMenuSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuFilterInput | null,
};

export type OnDeleteProductMenuSubscription = {
  onDeleteProductMenu?:  {
    __typename: "ProductMenu",
    id: string,
    productName?: string | null,
    description?: string | null,
    price?: number | null,
    stockQuantity?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductImages?:  {
      __typename: "ModelProductImagesConnection",
      items:  Array< {
        __typename: "ProductImages",
        id: string,
        productID: string,
        altText?: string | null,
        imagePath?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    OrderItems?:  {
      __typename: "ModelProductMenuOrderItemsConnection",
      items:  Array< {
        __typename: "ProductMenuOrderItems",
        id: string,
        orderItemsId: string,
        productMenuId: string,
        orderItems:  {
          __typename: "OrderItems",
          id: string,
          orderID: string,
          quantity?: number | null,
          purchasePrice?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    CartItems?:  {
      __typename: "ModelProductMenuCartItemsConnection",
      items:  Array< {
        __typename: "ProductMenuCartItems",
        id: string,
        cartItemsId: string,
        productMenuId: string,
        cartItems:  {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        productMenu:  {
          __typename: "ProductMenu",
          id: string,
          productName?: string | null,
          description?: string | null,
          price?: number | null,
          stockQuantity?: number | null,
          createdTime?: string | null,
          updatedTime?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    username?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    rewardPoints?: number | null,
    createdTime?: string | null,
    updatedTime?: string | null,
    Orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        userID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        orderStatus?: string | null,
        OrderItems?:  {
          __typename: "ModelOrderItemsConnection",
          nextToken?: string | null,
        } | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    ProductReviews?:  {
      __typename: "ModelProductReviewsConnection",
      items:  Array< {
        __typename: "ProductReviews",
        id: string,
        userID: string,
        productID: string,
        createdAt?: string | null,
        rating?: number | null,
        comment?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    ShoppingCart?:  {
      __typename: "ShoppingCart",
      id: string,
      userID?: string | null,
      CartItems?:  {
        __typename: "ModelCartItemsConnection",
        items:  Array< {
          __typename: "CartItems",
          id: string,
          cartID: string,
          quantity?: number | null,
          productID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    usersShoppingCartId?: string | null,
  } | null,
};

export type OnCreateProductMenuCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuCartItemsFilterInput | null,
};

export type OnCreateProductMenuCartItemsSubscription = {
  onCreateProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductMenuCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuCartItemsFilterInput | null,
};

export type OnUpdateProductMenuCartItemsSubscription = {
  onUpdateProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductMenuCartItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuCartItemsFilterInput | null,
};

export type OnDeleteProductMenuCartItemsSubscription = {
  onDeleteProductMenuCartItems?:  {
    __typename: "ProductMenuCartItems",
    id: string,
    cartItemsId: string,
    productMenuId: string,
    cartItems:  {
      __typename: "CartItems",
      id: string,
      cartID: string,
      quantity?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductMenuOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuOrderItemsFilterInput | null,
};

export type OnCreateProductMenuOrderItemsSubscription = {
  onCreateProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductMenuOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuOrderItemsFilterInput | null,
};

export type OnUpdateProductMenuOrderItemsSubscription = {
  onUpdateProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductMenuOrderItemsSubscriptionVariables = {
  filter?: ModelSubscriptionProductMenuOrderItemsFilterInput | null,
};

export type OnDeleteProductMenuOrderItemsSubscription = {
  onDeleteProductMenuOrderItems?:  {
    __typename: "ProductMenuOrderItems",
    id: string,
    orderItemsId: string,
    productMenuId: string,
    orderItems:  {
      __typename: "OrderItems",
      id: string,
      orderID: string,
      quantity?: number | null,
      purchasePrice?: number | null,
      productID?: string | null,
      productmenus?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    productMenu:  {
      __typename: "ProductMenu",
      id: string,
      productName?: string | null,
      description?: string | null,
      price?: number | null,
      stockQuantity?: number | null,
      createdTime?: string | null,
      updatedTime?: string | null,
      ProductReviews?:  {
        __typename: "ModelProductReviewsConnection",
        items:  Array< {
          __typename: "ProductReviews",
          id: string,
          userID: string,
          productID: string,
          createdAt?: string | null,
          rating?: number | null,
          comment?: string | null,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      ProductImages?:  {
        __typename: "ModelProductImagesConnection",
        items:  Array< {
          __typename: "ProductImages",
          id: string,
          productID: string,
          altText?: string | null,
          imagePath?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      OrderItems?:  {
        __typename: "ModelProductMenuOrderItemsConnection",
        items:  Array< {
          __typename: "ProductMenuOrderItems",
          id: string,
          orderItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      CartItems?:  {
        __typename: "ModelProductMenuCartItemsConnection",
        items:  Array< {
          __typename: "ProductMenuCartItems",
          id: string,
          cartItemsId: string,
          productMenuId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
