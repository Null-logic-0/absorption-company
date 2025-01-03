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