import { NextResponse } from 'next/server';

let users = [
  { id: '1', name: 'Navish' },
  { id: '2', name: 'Mehak' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newUser = { id: Date.now().toString(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser);
}
