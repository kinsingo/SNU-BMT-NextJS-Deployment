import { NextResponse } from "next/server";
import { isValidPassword } from "@/app/authentication/lib/util/validation";
import { getPublicCollection } from "@/MongoDB/db-manager";

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  try {
    // 요청 본문에서 JSON 데이터를 읽음
    const { email, password }: LoginRequestBody = await req.json();
    console.log("email (Received From BMP App): ", email);
    console.log("password (Received From BMP App): ", password);

    // 이메일로 사용자 조회
    const collection = await getPublicCollection("users");
    const user = await collection.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: `Could not find user for email ${email}.`,
      });
    }

    // 비밀번호 유효성 검사
    const pwIsValid = await isValidPassword(password, user.password);
    if (!pwIsValid) {
      return NextResponse.json({
        success: false,
        message: "Invalid password entered.",
      });
    }

    // 로그인 성공 시 사용자 데이터 반환
    return NextResponse.json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        email: user.email,
        isAdmin: user.isAdmin,
        isDeveloper: user.isDeveloper,
      },
    });
  } catch (error: any) {
    console.error("Login error:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}

//단순 URL 테스트용
export async function GET(req: Request) {
  try {
    // 요청 URL 확인
    const url = req.url;
    // 성공 응답 반환
    return NextResponse.json({
      success: true,
      message: "GET request received successfully.",
      url,
    });
  } catch (error: any) {
    console.error("GET error:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
}