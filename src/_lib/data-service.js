import { supabase } from "./supabase";

export async function getCustomers(email) {
  const { data: customers } = await supabase
    .from("customers")
    .select("*")
    .eq("email", email)
    .single();

  return customers;
}

export async function createCustomer(newCustomer) {
  const { data, error } = await supabase
    .from("customers")
    .insert([newCustomer]);

  if (error) {
    console.error(error);
    throw new Error("Customers could not be created");
  }

  return data;
}

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    throw new Error("Products could not be loaded");
  }

  return products;
}

export async function getSingleProduct(id) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error("product could not be loaded");
  }

  return product;
}

export async function getReviews() {
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select(`*,customer_id(id,fullName)`);
  if (error) {
    throw new Error("Reviews could not fetched");
  }

  return reviews;
}
