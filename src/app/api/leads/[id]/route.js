import { NextResponse } from 'next/server';

const leadDetails = {
    "1": {
        "id": "1",
        "name": "Mohd Zaid",
        "email": "mohdzaid@gmail.com",
        "mobile": "+917011888888",
        "company": "Video",
        "source": "WEBSITE",
        "created_at": "2023-07-20T10:00:00Z",
        "activity_timeline": [
            { "type": "Lead Generated", "timestamp": "2023-07-20T10:00:00Z", "details": "New lead captured from website." },
            { "type": "WhatsApp Message Sent", "timestamp": "2023-07-20T10:05:00Z", "details": "Initial greeting and introduction sent." },
            { "type": "Outbound Call Made", "timestamp": "2023-07-21T11:00:00Z", "details": "Outbound call initiated by SHIVAM YADAV using did 9184856203." },
            { "type": "Campaign Created", "timestamp": "2023-07-22T14:30:00Z", "details": "New 'Photography and Videography' campaign created in draft." }
        ]
    },
    "2": {
        "id": "2",
        "name": "Ayan Shah",
        "email": "ayanshah10@gmail.com",
        "mobile": "+917071077777",
        "company": "Cartoon md",
        "source": "WEBSITE",
        "created_at": "2023-07-19T12:30:00Z",
        "activity_timeline": [
            { "type": "Campaign Created", "timestamp": "2023-07-19T12:35:00Z", "details": "Initial campaign setup." }
        ]
    }
}


export async function GET(request, { params }) {
  const { id } = params;
  const lead = leadDetails[id];

  if (lead) {
    return NextResponse.json({ data: lead });
  } else {
    return new NextResponse(JSON.stringify({ message: "Lead not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
