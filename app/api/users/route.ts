import { getDataFromToken } from '@/helpers/getDataFromToken';

import { NextRequest, NextResponse } from 'next/server';

import User from '@/models/student';

import { connect } from '@/utils/database';
connect();

export async function GET(request: NextRequest) {
  try {
    // const userId = await getDataFromToken(request);
    const users = await User.find({}).select('-password');
    console.log(users);
    return NextResponse.json({
      message: 'User found',
      data: users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
