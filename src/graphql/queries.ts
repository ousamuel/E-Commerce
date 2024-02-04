/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCartItems = /* GraphQL */ `query GetCartItems($id: ID!) {
  getCartItems(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCartItemsQueryVariables,
  APITypes.GetCartItemsQuery
>;
export const listCartItems = /* GraphQL */ `query ListCartItems(
  $filter: ModelCartItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCartItemsQueryVariables,
  APITypes.ListCartItemsQuery
>;
export const cartItemsByCartID = /* GraphQL */ `query CartItemsByCartID(
  $cartID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCartItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  cartItemsByCartID(
    cartID: $cartID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CartItemsByCartIDQueryVariables,
  APITypes.CartItemsByCartIDQuery
>;
export const getShoppingCart = /* GraphQL */ `query GetShoppingCart($id: ID!) {
  getShoppingCart(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetShoppingCartQueryVariables,
  APITypes.GetShoppingCartQuery
>;
export const listShoppingCarts = /* GraphQL */ `query ListShoppingCarts(
  $filter: ModelShoppingCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listShoppingCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShoppingCartsQueryVariables,
  APITypes.ListShoppingCartsQuery
>;
export const getOrderItems = /* GraphQL */ `query GetOrderItems($id: ID!) {
  getOrderItems(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOrderItemsQueryVariables,
  APITypes.GetOrderItemsQuery
>;
export const listOrderItems = /* GraphQL */ `query ListOrderItems(
  $filter: ModelOrderItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrderItemsQueryVariables,
  APITypes.ListOrderItemsQuery
>;
export const orderItemsByOrderID = /* GraphQL */ `query OrderItemsByOrderID(
  $orderID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  orderItemsByOrderID(
    orderID: $orderID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrderItemsByOrderIDQueryVariables,
  APITypes.OrderItemsByOrderIDQuery
>;
export const getOrders = /* GraphQL */ `query GetOrders($id: ID!) {
  getOrders(id: $id) {
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
` as GeneratedQuery<APITypes.GetOrdersQueryVariables, APITypes.GetOrdersQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrdersFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const ordersByUserID = /* GraphQL */ `query OrdersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrdersFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIDQueryVariables,
  APITypes.OrdersByUserIDQuery
>;
export const getProductReviews = /* GraphQL */ `query GetProductReviews($id: ID!) {
  getProductReviews(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductReviewsQueryVariables,
  APITypes.GetProductReviewsQuery
>;
export const listProductReviews = /* GraphQL */ `query ListProductReviews(
  $filter: ModelProductReviewsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListProductReviewsQueryVariables,
  APITypes.ListProductReviewsQuery
>;
export const productReviewsByUserID = /* GraphQL */ `query ProductReviewsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductReviewsFilterInput
  $limit: Int
  $nextToken: String
) {
  productReviewsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ProductReviewsByUserIDQueryVariables,
  APITypes.ProductReviewsByUserIDQuery
>;
export const productReviewsByProductID = /* GraphQL */ `query ProductReviewsByProductID(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductReviewsFilterInput
  $limit: Int
  $nextToken: String
) {
  productReviewsByProductID(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ProductReviewsByProductIDQueryVariables,
  APITypes.ProductReviewsByProductIDQuery
>;
export const getProductImages = /* GraphQL */ `query GetProductImages($id: ID!) {
  getProductImages(id: $id) {
    id
    productID
    altText
    imagePath
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductImagesQueryVariables,
  APITypes.GetProductImagesQuery
>;
export const listProductImages = /* GraphQL */ `query ListProductImages(
  $filter: ModelProductImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListProductImagesQueryVariables,
  APITypes.ListProductImagesQuery
>;
export const productImagesByProductID = /* GraphQL */ `query ProductImagesByProductID(
  $productID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductImagesFilterInput
  $limit: Int
  $nextToken: String
) {
  productImagesByProductID(
    productID: $productID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
}
` as GeneratedQuery<
  APITypes.ProductImagesByProductIDQueryVariables,
  APITypes.ProductImagesByProductIDQuery
>;
export const getProductMenu = /* GraphQL */ `query GetProductMenu($id: ID!) {
  getProductMenu(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductMenuQueryVariables,
  APITypes.GetProductMenuQuery
>;
export const listProductMenus = /* GraphQL */ `query ListProductMenus(
  $filter: ModelProductMenuFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductMenusQueryVariables,
  APITypes.ListProductMenusQuery
>;
export const getUsers = /* GraphQL */ `query GetUsers($id: ID!) {
  getUsers(id: $id) {
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
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getProductMenuCartItems = /* GraphQL */ `query GetProductMenuCartItems($id: ID!) {
  getProductMenuCartItems(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductMenuCartItemsQueryVariables,
  APITypes.GetProductMenuCartItemsQuery
>;
export const listProductMenuCartItems = /* GraphQL */ `query ListProductMenuCartItems(
  $filter: ModelProductMenuCartItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductMenuCartItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cartItemsId
      productMenuId
      cartItems {
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
      productMenu {
        id
        productName
        description
        price
        stockQuantity
        createdTime
        updatedTime
        ProductReviews {
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductMenuCartItemsQueryVariables,
  APITypes.ListProductMenuCartItemsQuery
>;
export const productMenuCartItemsByCartItemsId = /* GraphQL */ `query ProductMenuCartItemsByCartItemsId(
  $cartItemsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductMenuCartItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  productMenuCartItemsByCartItemsId(
    cartItemsId: $cartItemsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cartItemsId
      productMenuId
      cartItems {
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
      productMenu {
        id
        productName
        description
        price
        stockQuantity
        createdTime
        updatedTime
        ProductReviews {
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductMenuCartItemsByCartItemsIdQueryVariables,
  APITypes.ProductMenuCartItemsByCartItemsIdQuery
>;
export const productMenuCartItemsByProductMenuId = /* GraphQL */ `query ProductMenuCartItemsByProductMenuId(
  $productMenuId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductMenuCartItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  productMenuCartItemsByProductMenuId(
    productMenuId: $productMenuId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cartItemsId
      productMenuId
      cartItems {
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
      productMenu {
        id
        productName
        description
        price
        stockQuantity
        createdTime
        updatedTime
        ProductReviews {
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductMenuCartItemsByProductMenuIdQueryVariables,
  APITypes.ProductMenuCartItemsByProductMenuIdQuery
>;
export const getProductMenuOrderItems = /* GraphQL */ `query GetProductMenuOrderItems($id: ID!) {
  getProductMenuOrderItems(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductMenuOrderItemsQueryVariables,
  APITypes.GetProductMenuOrderItemsQuery
>;
export const listProductMenuOrderItems = /* GraphQL */ `query ListProductMenuOrderItems(
  $filter: ModelProductMenuOrderItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductMenuOrderItems(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
        productmenus {
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
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductMenuOrderItemsQueryVariables,
  APITypes.ListProductMenuOrderItemsQuery
>;
export const productMenuOrderItemsByOrderItemsId = /* GraphQL */ `query ProductMenuOrderItemsByOrderItemsId(
  $orderItemsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductMenuOrderItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  productMenuOrderItemsByOrderItemsId(
    orderItemsId: $orderItemsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
        productmenus {
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
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductMenuOrderItemsByOrderItemsIdQueryVariables,
  APITypes.ProductMenuOrderItemsByOrderItemsIdQuery
>;
export const productMenuOrderItemsByProductMenuId = /* GraphQL */ `query ProductMenuOrderItemsByProductMenuId(
  $productMenuId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductMenuOrderItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  productMenuOrderItemsByProductMenuId(
    productMenuId: $productMenuId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
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
        productmenus {
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
          nextToken
          __typename
        }
        ProductImages {
          nextToken
          __typename
        }
        OrderItems {
          nextToken
          __typename
        }
        CartItems {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductMenuOrderItemsByProductMenuIdQueryVariables,
  APITypes.ProductMenuOrderItemsByProductMenuIdQuery
>;
