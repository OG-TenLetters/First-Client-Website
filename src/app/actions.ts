"use server";

export async function myAction(formData: FormData) {
  // Your server-side logic here
  const name = formData.get("name");
  console.log("Name from form:", name);
  // ...
}