"use server";
import React from "react";
import { redirect } from "next/navigation";
import LogInSignIn from "@/components/auth/LogInSignIn";
import { getAuthSession } from "../api/auth/[...nextauth]/route";

type Props = {};

const SignIn = async (props: Props) => {
  const session = await getAuthSession();

  if (session) {
    redirect("/dashboard");
  }
  return <LogInSignIn />;
};

export default SignIn;
