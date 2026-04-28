import { NextRequest, NextResponse } from 'next/server'

// In-memory store (replace with DB in production)
const leads: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Name, email, and company are required' },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone: phone || '',
      message: message || '',
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log('New lead captured:', lead)

    return NextResponse.json(
      { success: true, message: 'Thank you! We will contact you shortly.', id: lead.id },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ leads, total: leads.length })
}
