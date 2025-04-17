import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Auth bypassed (GET)" }, { status: 200 });
};

export const POST = () => {
  return NextResponse.json({ message: "Auth bypassed (POST)" }, { status: 200 });
};

export const HEAD = () => {
  return NextResponse.json({ message: "Auth bypassed (HEAD)" }, { status: 200 });
};
