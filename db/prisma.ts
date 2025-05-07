// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Khởi tạo Prisma client mặc định, không dùng adapter Neon
export const prisma = new PrismaClient().$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
    cart: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(cart) {
          return cart.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(cart) {
          return cart.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(cart) {
          return cart.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(cart) {
          return cart.totalPrice.toString();
        },
      },
    },
    order: {
      itemsPrice: {
        needs: { itemsPrice: true },
        compute(order) {
          return order.itemsPrice.toString();
        },
      },
      shippingPrice: {
        needs: { shippingPrice: true },
        compute(order) {
          return order.shippingPrice.toString();
        },
      },
      taxPrice: {
        needs: { taxPrice: true },
        compute(order) {
          return order.taxPrice.toString();
        },
      },
      totalPrice: {
        needs: { totalPrice: true },
        compute(order) {
          return order.totalPrice.toString();
        },
      },
    },
    orderItem: {
      price: {
        compute(item) {
          return item.price.toString();
        },
      },
    },
  },
});
