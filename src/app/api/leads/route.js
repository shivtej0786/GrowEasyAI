import { NextResponse } from 'next/server';

export async function GET() {
  const leads = {
    "data": [
      {
        "id": "1",
        "name": "Mohd Zaid",
        "email": "mohdzaid@gmail.com",
        "mobile": "+917011888888",
        "company": "Video",
        "source": "WEBSITE",
        "created_at": "2023-07-20T10:00:00Z"
      },
      {
        "id": "2",
        "name": "Ayan Shah",
        "email": "ayanshah10@gmail.com",
        "mobile": "+917071077777",
        "company": "Cartoon md",
        "source": "WEBSITE",
        "created_at": "2023-07-19T12:30:00Z"
      }
    ]
  };
  return NextResponse.json(leads);
}
