import { connect } from '@/utils/database';
import Student from '@/models/student';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      firstName,
      lastName,
      email,
      password,
      country,
      state,
      track,
      education,
    } = reqBody;

    console.log(reqBody);

    // check if user already exists
    const user = await Student.findOne({ email });
    console.log('user', user);
    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      country,
      state,
      track,
      education,
    });

    const savedStudent = await newStudent.save();
    return NextResponse.json(
      { message: 'User created successfully', success: true, savedStudent },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
