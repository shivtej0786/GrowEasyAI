import { NextResponse } from 'next/server';

export async function GET() {
  const organizations = {
    "data": [
      {
        "id": "1",
        "name": "GrowEasy AI"
      },
      {
        "id": "2",
        "name": "Test Corp"
      },
      {
        "id": "3",
        "name": "Sales AI"
      }
    ]
  };
  return NextResponse.json(organizations);
}
