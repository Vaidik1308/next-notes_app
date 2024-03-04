"use server";
import React from "react";
import { redirect } from "next/navigation";
import LogInSignIn from "@/components/auth/LogInSignIn";
import { auth } from "@/auth";

type Props = {};

const SignIn = async (props: Props) => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  return <LogInSignIn />;
};

export default SignIn;
