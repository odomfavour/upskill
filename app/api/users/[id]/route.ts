import { NextRequest, NextResponse } from 'next/server';

import User from '@/models/student';

import { connect } from '@/utils/database';
connect();

export async function POST(request: NextRequest, params: any) {
  try {
    const users = await User.findByIdAndRemove(params.id);
    console.log(users);
    return NextResponse.json({
      message: 'User found',
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
