/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCartItems = /* GraphQL */ `mutation CreateCartItems(
  $input: CreateCartItemsInput!
  $condition: ModelCartItemsConditionInput
) {
  createCartItems(input: $input, condition: $condition) {
    id
    cartID
    quantity
    productID
    productmenus {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCartItemsMutationVariables,
  APITypes.CreateCartItemsMutation
>;
export const updateCartItems = /* GraphQL */ `mutation UpdateCartItems(
  $input: UpdateCartItemsInput!
  $condition: ModelCartItemsConditionInput
) {
  updateCartItems(input: $input, condition: $condition) {
    id
    cartID
    quantity
    productID
    productmenus {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCartItemsMutationVariables,
  APITypes.UpdateCartItemsMutation
>;
export const deleteCartItems = /* GraphQL */ `mutation DeleteCartItems(
  $input: DeleteCartItemsInput!
  $condition: ModelCartItemsConditionInput
) {
  deleteCartItems(input: $input, condition: $condition) {
    id
    cartID
    quantity
    productID
    productmenus {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCartItemsMutationVariables,
  APITypes.DeleteCartItemsMutation
>;
export const createShoppingCart = /* GraphQL */ `mutation CreateShoppingCart(
  $input: CreateShoppingCartInput!
  $condition: ModelShoppingCartConditionInput
) {
  createShoppingCart(input: $input, condition: $condition) {
    id
    userID
    CartItems {
      items {
        id
        cartID
        quantity
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateShoppingCartMutationVariables,
  APITypes.CreateShoppingCartMutation
>;
export const updateShoppingCart = /* GraphQL */ `mutation UpdateShoppingCart(
  $input: UpdateShoppingCartInput!
  $condition: ModelShoppingCartConditionInput
) {
  updateShoppingCart(input: $input, condition: $condition) {
    id
    userID
    CartItems {
      items {
        id
        cartID
        quantity
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateShoppingCartMutationVariables,
  APITypes.UpdateShoppingCartMutation
>;
export const deleteShoppingCart = /* GraphQL */ `mutation DeleteShoppingCart(
  $input: DeleteShoppingCartInput!
  $condition: ModelShoppingCartConditionInput
) {
  deleteShoppingCart(input: $input, condition: $condition) {
    id
    userID
    CartItems {
      items {
        id
        cartID
        quantity
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteShoppingCartMutationVariables,
  APITypes.DeleteShoppingCartMutation
>;
export const createOrderItems = /* GraphQL */ `mutation CreateOrderItems(
  $input: CreateOrderItemsInput!
  $condition: ModelOrderItemsConditionInput
) {
  createOrderItems(input: $input, condition: $condition) {
    id
    orderID
    quantity
    purchasePrice
    productID
    productmenus {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrderItemsMutationVariables,
  APITypes.CreateOrderItemsMutation
>;
export const updateOrderItems = /* GraphQL */ `mutation UpdateOrderItems(
  $input: UpdateOrderItemsInput!
  $condition: ModelOrderItemsConditionInput
) {
  updateOrderItems(input: $input, condition: $condition) {
    id
    orderID
    quantity
    purchasePrice
    productID
    productmenus {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrderItemsMutationVariables,
  APITypes.UpdateOrderItemsMutation
>;
export const deleteOrderItems = /* GraphQL */ `mutation DeleteOrderItems(
  $input: DeleteOrderItemsInput!
  $condition: ModelOrderItemsConditionInput
) {
  deleteOrderItems(input: $input, condition: $condition) {
    id
    orderID
    quantity
    purchasePrice
    productID
    productmenus {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrderItemsMutationVariables,
  APITypes.DeleteOrderItemsMutation
>;
export const createOrders = /* GraphQL */ `mutation CreateOrders(
  $input: CreateOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  createOrders(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    orderStatus
    OrderItems {
      items {
        id
        orderID
        quantity
        purchasePrice
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOrdersMutationVariables,
  APITypes.CreateOrdersMutation
>;
export const updateOrders = /* GraphQL */ `mutation UpdateOrders(
  $input: UpdateOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  updateOrders(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    orderStatus
    OrderItems {
      items {
        id
        orderID
        quantity
        purchasePrice
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOrdersMutationVariables,
  APITypes.UpdateOrdersMutation
>;
export const deleteOrders = /* GraphQL */ `mutation DeleteOrders(
  $input: DeleteOrdersInput!
  $condition: ModelOrdersConditionInput
) {
  deleteOrders(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    orderStatus
    OrderItems {
      items {
        id
        orderID
        quantity
        purchasePrice
        productID
        productmenus {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOrdersMutationVariables,
  APITypes.DeleteOrdersMutation
>;
export const createProductReviews = /* GraphQL */ `mutation CreateProductReviews(
  $input: CreateProductReviewsInput!
  $condition: ModelProductReviewsConditionInput
) {
  createProductReviews(input: $input, condition: $condition) {
    id
    userID
    productID
    createdAt
    rating
    comment
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductReviewsMutationVariables,
  APITypes.CreateProductReviewsMutation
>;
export const updateProductReviews = /* GraphQL */ `mutation UpdateProductReviews(
  $input: UpdateProductReviewsInput!
  $condition: ModelProductReviewsConditionInput
) {
  updateProductReviews(input: $input, condition: $condition) {
    id
    userID
    productID
    createdAt
    rating
    comment
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductReviewsMutationVariables,
  APITypes.UpdateProductReviewsMutation
>;
export const deleteProductReviews = /* GraphQL */ `mutation DeleteProductReviews(
  $input: DeleteProductReviewsInput!
  $condition: ModelProductReviewsConditionInput
) {
  deleteProductReviews(input: $input, condition: $condition) {
    id
    userID
    productID
    createdAt
    rating
    comment
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductReviewsMutationVariables,
  APITypes.DeleteProductReviewsMutation
>;
export const createProductImages = /* GraphQL */ `mutation CreateProductImages(
  $input: CreateProductImagesInput!
  $condition: ModelProductImagesConditionInput
) {
  createProductImages(input: $input, condition: $condition) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductImagesMutationVariables,
  APITypes.CreateProductImagesMutation
>;
export const updateProductImages = /* GraphQL */ `mutation UpdateProductImages(
  $input: UpdateProductImagesInput!
  $condition: ModelProductImagesConditionInput
) {
  updateProductImages(input: $input, condition: $condition) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductImagesMutationVariables,
  APITypes.UpdateProductImagesMutation
>;
export const deleteProductImages = /* GraphQL */ `mutation DeleteProductImages(
  $input: DeleteProductImagesInput!
  $condition: ModelProductImagesConditionInput
) {
  deleteProductImages(input: $input, condition: $condition) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductImagesMutationVariables,
  APITypes.DeleteProductImagesMutation
>;
export const createProductMenu = /* GraphQL */ `mutation CreateProductMenu(
  $input: CreateProductMenuInput!
  $condition: ModelProductMenuConditionInput
) {
  createProductMenu(input: $input, condition: $condition) {
    id
    productName
    description
    price
    stockQuantity
    createdTime
    updatedTime
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ProductImages {
      items {
        id
        productID
        altText
        imagePath
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    OrderItems {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMenuMutationVariables,
  APITypes.CreateProductMenuMutation
>;
export const updateProductMenu = /* GraphQL */ `mutation UpdateProductMenu(
  $input: UpdateProductMenuInput!
  $condition: ModelProductMenuConditionInput
) {
  updateProductMenu(input: $input, condition: $condition) {
    id
    productName
    description
    price
    stockQuantity
    createdTime
    updatedTime
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ProductImages {
      items {
        id
        productID
        altText
        imagePath
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    OrderItems {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMenuMutationVariables,
  APITypes.UpdateProductMenuMutation
>;
export const deleteProductMenu = /* GraphQL */ `mutation DeleteProductMenu(
  $input: DeleteProductMenuInput!
  $condition: ModelProductMenuConditionInput
) {
  deleteProductMenu(input: $input, condition: $condition) {
    id
    productName
    description
    price
    stockQuantity
    createdTime
    updatedTime
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ProductImages {
      items {
        id
        productID
        altText
        imagePath
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    OrderItems {
      items {
        id
        orderItemsId
        productMenuId
        orderItems {
          id
          orderID
          quantity
          purchasePrice
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    CartItems {
      items {
        id
        cartItemsId
        productMenuId
        cartItems {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        productMenu {
          id
          productName
          description
          price
          stockQuantity
          createdTime
          updatedTime
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMenuMutationVariables,
  APITypes.DeleteProductMenuMutation
>;
export const createUsers = /* GraphQL */ `mutation CreateUsers(
  $input: CreateUsersInput!
  $condition: ModelUsersConditionInput
) {
  createUsers(input: $input, condition: $condition) {
    id
    username
    email
    passwordHash
    rewardPoints
    createdTime
    updatedTime
    Orders {
      items {
        id
        userID
        createdAt
        updatedAt
        orderStatus
        OrderItems {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ShoppingCart {
      id
      userID
      CartItems {
        items {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    usersShoppingCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUsersMutationVariables,
  APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: ModelUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
    id
    username
    email
    passwordHash
    rewardPoints
    createdTime
    updatedTime
    Orders {
      items {
        id
        userID
        createdAt
        updatedAt
        orderStatus
        OrderItems {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ShoppingCart {
      id
      userID
      CartItems {
        items {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    usersShoppingCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUsersMutationVariables,
  APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: ModelUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
    id
    username
    email
    passwordHash
    rewardPoints
    createdTime
    updatedTime
    Orders {
      items {
        id
        userID
        createdAt
        updatedAt
        orderStatus
        OrderItems {
          nextToken
          __typename
        }
        __typename
      }
      nextToken
      __typename
    }
    ProductReviews {
      items {
        id
        userID
        productID
        createdAt
        rating
        comment
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    ShoppingCart {
      id
      userID
      CartItems {
        items {
          id
          cartID
          quantity
          productID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    usersShoppingCartId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUsersMutationVariables,
  APITypes.DeleteUsersMutation
>;
export const createProductMenuCartItems = /* GraphQL */ `mutation CreateProductMenuCartItems(
  $input: CreateProductMenuCartItemsInput!
  $condition: ModelProductMenuCartItemsConditionInput
) {
  createProductMenuCartItems(input: $input, condition: $condition) {
    id
    cartItemsId
    productMenuId
    cartItems {
      id
      cartID
      quantity
      productID
      productmenus {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMenuCartItemsMutationVariables,
  APITypes.CreateProductMenuCartItemsMutation
>;
export const updateProductMenuCartItems = /* GraphQL */ `mutation UpdateProductMenuCartItems(
  $input: UpdateProductMenuCartItemsInput!
  $condition: ModelProductMenuCartItemsConditionInput
) {
  updateProductMenuCartItems(input: $input, condition: $condition) {
    id
    cartItemsId
    productMenuId
    cartItems {
      id
      cartID
      quantity
      productID
      productmenus {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMenuCartItemsMutationVariables,
  APITypes.UpdateProductMenuCartItemsMutation
>;
export const deleteProductMenuCartItems = /* GraphQL */ `mutation DeleteProductMenuCartItems(
  $input: DeleteProductMenuCartItemsInput!
  $condition: ModelProductMenuCartItemsConditionInput
) {
  deleteProductMenuCartItems(input: $input, condition: $condition) {
    id
    cartItemsId
    productMenuId
    cartItems {
      id
      cartID
      quantity
      productID
      productmenus {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMenuCartItemsMutationVariables,
  APITypes.DeleteProductMenuCartItemsMutation
>;
export const createProductMenuOrderItems = /* GraphQL */ `mutation CreateProductMenuOrderItems(
  $input: CreateProductMenuOrderItemsInput!
  $condition: ModelProductMenuOrderItemsConditionInput
) {
  createProductMenuOrderItems(input: $input, condition: $condition) {
    id
    orderItemsId
    productMenuId
    orderItems {
      id
      orderID
      quantity
      purchasePrice
      productID
      productmenus {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProductMenuOrderItemsMutationVariables,
  APITypes.CreateProductMenuOrderItemsMutation
>;
export const updateProductMenuOrderItems = /* GraphQL */ `mutation UpdateProductMenuOrderItems(
  $input: UpdateProductMenuOrderItemsInput!
  $condition: ModelProductMenuOrderItemsConditionInput
) {
  updateProductMenuOrderItems(input: $input, condition: $condition) {
    id
    orderItemsId
    productMenuId
    orderItems {
      id
      orderID
      quantity
      purchasePrice
      productID
      productmenus {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProductMenuOrderItemsMutationVariables,
  APITypes.UpdateProductMenuOrderItemsMutation
>;
export const deleteProductMenuOrderItems = /* GraphQL */ `mutation DeleteProductMenuOrderItems(
  $input: DeleteProductMenuOrderItemsInput!
  $condition: ModelProductMenuOrderItemsConditionInput
) {
  deleteProductMenuOrderItems(input: $input, condition: $condition) {
    id
    orderItemsId
    productMenuId
    orderItems {
      id
      orderID
      quantity
      purchasePrice
      productID
      productmenus {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    productMenu {
      id
      productName
      description
      price
      stockQuantity
      createdTime
      updatedTime
      ProductReviews {
        items {
          id
          userID
          productID
          createdAt
          rating
          comment
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      ProductImages {
        items {
          id
          productID
          altText
          imagePath
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      OrderItems {
        items {
          id
          orderItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      CartItems {
        items {
          id
          cartItemsId
          productMenuId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProductMenuOrderItemsMutationVariables,
  APITypes.DeleteProductMenuOrderItemsMutation
>;
