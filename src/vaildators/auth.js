import { z } from 'zod';

export const loginSchema = z.object({
  userId: z
    .string()
    .nonempty({ message: '아이디는 필수 입력값입니다.' })
    .min(4, { message: '아이디는 4글자 이상이어야 합니다.' })
    .max(20, { message: '이름은 20글자 이하이어야 합니다.' }),
  password: z
    .string()
    .nonempty({ message: '비밀번호를 입력해주세요.' })
    .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
    .max(100, '비밀번호는 100자리 이하이어야 합니다.')
    .refine(
      (value) => passwordRegex.test(value),
      '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
    ),
  //   가입된 아이디 확인
  idCheck: z.boolean().default(false).optional(),
});
