/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCartItems = /* GraphQL */ `subscription OnCreateCartItems($filter: ModelSubscriptionCartItemsFilterInput) {
  onCreateCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartItemsSubscriptionVariables,
  APITypes.OnCreateCartItemsSubscription
>;
export const onUpdateCartItems = /* GraphQL */ `subscription OnUpdateCartItems($filter: ModelSubscriptionCartItemsFilterInput) {
  onUpdateCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartItemsSubscriptionVariables,
  APITypes.OnUpdateCartItemsSubscription
>;
export const onDeleteCartItems = /* GraphQL */ `subscription OnDeleteCartItems($filter: ModelSubscriptionCartItemsFilterInput) {
  onDeleteCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartItemsSubscriptionVariables,
  APITypes.OnDeleteCartItemsSubscription
>;
export const onCreateShoppingCart = /* GraphQL */ `subscription OnCreateShoppingCart(
  $filter: ModelSubscriptionShoppingCartFilterInput
) {
  onCreateShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateShoppingCartSubscriptionVariables,
  APITypes.OnCreateShoppingCartSubscription
>;
export const onUpdateShoppingCart = /* GraphQL */ `subscription OnUpdateShoppingCart(
  $filter: ModelSubscriptionShoppingCartFilterInput
) {
  onUpdateShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateShoppingCartSubscriptionVariables,
  APITypes.OnUpdateShoppingCartSubscription
>;
export const onDeleteShoppingCart = /* GraphQL */ `subscription OnDeleteShoppingCart(
  $filter: ModelSubscriptionShoppingCartFilterInput
) {
  onDeleteShoppingCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteShoppingCartSubscriptionVariables,
  APITypes.OnDeleteShoppingCartSubscription
>;
export const onCreateOrderItems = /* GraphQL */ `subscription OnCreateOrderItems(
  $filter: ModelSubscriptionOrderItemsFilterInput
) {
  onCreateOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderItemsSubscriptionVariables,
  APITypes.OnCreateOrderItemsSubscription
>;
export const onUpdateOrderItems = /* GraphQL */ `subscription OnUpdateOrderItems(
  $filter: ModelSubscriptionOrderItemsFilterInput
) {
  onUpdateOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderItemsSubscriptionVariables,
  APITypes.OnUpdateOrderItemsSubscription
>;
export const onDeleteOrderItems = /* GraphQL */ `subscription OnDeleteOrderItems(
  $filter: ModelSubscriptionOrderItemsFilterInput
) {
  onDeleteOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderItemsSubscriptionVariables,
  APITypes.OnDeleteOrderItemsSubscription
>;
export const onCreateOrders = /* GraphQL */ `subscription OnCreateOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onCreateOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrdersSubscriptionVariables,
  APITypes.OnCreateOrdersSubscription
>;
export const onUpdateOrders = /* GraphQL */ `subscription OnUpdateOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onUpdateOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrdersSubscriptionVariables,
  APITypes.OnUpdateOrdersSubscription
>;
export const onDeleteOrders = /* GraphQL */ `subscription OnDeleteOrders($filter: ModelSubscriptionOrdersFilterInput) {
  onDeleteOrders(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrdersSubscriptionVariables,
  APITypes.OnDeleteOrdersSubscription
>;
export const onCreateProductReviews = /* GraphQL */ `subscription OnCreateProductReviews(
  $filter: ModelSubscriptionProductReviewsFilterInput
) {
  onCreateProductReviews(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductReviewsSubscriptionVariables,
  APITypes.OnCreateProductReviewsSubscription
>;
export const onUpdateProductReviews = /* GraphQL */ `subscription OnUpdateProductReviews(
  $filter: ModelSubscriptionProductReviewsFilterInput
) {
  onUpdateProductReviews(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductReviewsSubscriptionVariables,
  APITypes.OnUpdateProductReviewsSubscription
>;
export const onDeleteProductReviews = /* GraphQL */ `subscription OnDeleteProductReviews(
  $filter: ModelSubscriptionProductReviewsFilterInput
) {
  onDeleteProductReviews(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductReviewsSubscriptionVariables,
  APITypes.OnDeleteProductReviewsSubscription
>;
export const onCreateProductImages = /* GraphQL */ `subscription OnCreateProductImages(
  $filter: ModelSubscriptionProductImagesFilterInput
) {
  onCreateProductImages(filter: $filter) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductImagesSubscriptionVariables,
  APITypes.OnCreateProductImagesSubscription
>;
export const onUpdateProductImages = /* GraphQL */ `subscription OnUpdateProductImages(
  $filter: ModelSubscriptionProductImagesFilterInput
) {
  onUpdateProductImages(filter: $filter) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductImagesSubscriptionVariables,
  APITypes.OnUpdateProductImagesSubscription
>;
export const onDeleteProductImages = /* GraphQL */ `subscription OnDeleteProductImages(
  $filter: ModelSubscriptionProductImagesFilterInput
) {
  onDeleteProductImages(filter: $filter) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductImagesSubscriptionVariables,
  APITypes.OnDeleteProductImagesSubscription
>;
export const onCreateProductMenu = /* GraphQL */ `subscription OnCreateProductMenu(
  $filter: ModelSubscriptionProductMenuFilterInput
) {
  onCreateProductMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductMenuSubscriptionVariables,
  APITypes.OnCreateProductMenuSubscription
>;
export const onUpdateProductMenu = /* GraphQL */ `subscription OnUpdateProductMenu(
  $filter: ModelSubscriptionProductMenuFilterInput
) {
  onUpdateProductMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductMenuSubscriptionVariables,
  APITypes.OnUpdateProductMenuSubscription
>;
export const onDeleteProductMenu = /* GraphQL */ `subscription OnDeleteProductMenu(
  $filter: ModelSubscriptionProductMenuFilterInput
) {
  onDeleteProductMenu(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductMenuSubscriptionVariables,
  APITypes.OnDeleteProductMenuSubscription
>;
export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onCreateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
export const onCreateProductMenuCartItems = /* GraphQL */ `subscription OnCreateProductMenuCartItems(
  $filter: ModelSubscriptionProductMenuCartItemsFilterInput
) {
  onCreateProductMenuCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductMenuCartItemsSubscriptionVariables,
  APITypes.OnCreateProductMenuCartItemsSubscription
>;
export const onUpdateProductMenuCartItems = /* GraphQL */ `subscription OnUpdateProductMenuCartItems(
  $filter: ModelSubscriptionProductMenuCartItemsFilterInput
) {
  onUpdateProductMenuCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductMenuCartItemsSubscriptionVariables,
  APITypes.OnUpdateProductMenuCartItemsSubscription
>;
export const onDeleteProductMenuCartItems = /* GraphQL */ `subscription OnDeleteProductMenuCartItems(
  $filter: ModelSubscriptionProductMenuCartItemsFilterInput
) {
  onDeleteProductMenuCartItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductMenuCartItemsSubscriptionVariables,
  APITypes.OnDeleteProductMenuCartItemsSubscription
>;
export const onCreateProductMenuOrderItems = /* GraphQL */ `subscription OnCreateProductMenuOrderItems(
  $filter: ModelSubscriptionProductMenuOrderItemsFilterInput
) {
  onCreateProductMenuOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductMenuOrderItemsSubscriptionVariables,
  APITypes.OnCreateProductMenuOrderItemsSubscription
>;
export const onUpdateProductMenuOrderItems = /* GraphQL */ `subscription OnUpdateProductMenuOrderItems(
  $filter: ModelSubscriptionProductMenuOrderItemsFilterInput
) {
  onUpdateProductMenuOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductMenuOrderItemsSubscriptionVariables,
  APITypes.OnUpdateProductMenuOrderItemsSubscription
>;
export const onDeleteProductMenuOrderItems = /* GraphQL */ `subscription OnDeleteProductMenuOrderItems(
  $filter: ModelSubscriptionProductMenuOrderItemsFilterInput
) {
  onDeleteProductMenuOrderItems(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductMenuOrderItemsSubscriptionVariables,
  APITypes.OnDeleteProductMenuOrderItemsSubscription
>;
