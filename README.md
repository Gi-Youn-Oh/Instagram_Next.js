# Instagram Clone Coding
프로젝트 링크: https://instagram-next-js-one.vercel.app/

### [프로젝트 개요]

Next-Auth(O-Auth) 활용하여 JWT 인증 방식과 Sanity를 활용하여  Headless CMS로 구현하였습니다. 

Next.js로 서버를 구성하여 데이터 보안과 안정성을 강화하고 Sanity-Studio를 통해 schema를 직접 작성하고 프론트와 백엔드 전반적인 데이터 흐름 방식을 이해하게 되었습니다.

### [기술 스택]

`TypeScript` `React` `Next.js` `Tailwind` `SWR` `Sanity` `Next-Auth` `Vercel`

### [주요 기능]

- 좋아요, 북마크, 댓글 기능
- 유저 간 팔로우 & 언팔로우 기능
- 게시글 포스팅 기능
- 사용자 검색 기능

### [개발과정 및 문제해결]

### **Procedure**

1. **Next-Auth**
    - 대표적인 로그인 방식인 세션 & 쿠키 및 JWT 방식을 이해하고, O-Auth를 통하여 구글 로그인을 구현하였습니다.
2. **Sanity**
    - Headless CMS의 장점과 단점을 이해하고 활용할 수 있게 되었습니다.
    - Data Schema를 작성하고, API 통신으로 클라이언트와 서버 간 데이터 관리에 대해 깊게 이해하게 되었습니다.
3. **SWR** 
    - Stale & Cache Data 관리를 통하여 렌더링 최적화로 사용자 경험을 향상시켰습니다.

### **ISSUE**

1. **Authorization** 
    - O-Auth 인증 과정에서 인증 실패 상황이 많이 발생하여 환경변수와 클라우드 설정을 통하여 해결하였으며, 인증 시 주의할 점에 대해 알게 되었습니다.
2. **GROQ-Query**
    - Sanity로 데이터 통신을 위하여 GROQ-Query를 새롭게 사용해야 했으며, 공식문서를 통하여 Join-Query를 사용해 불필요한 통신을 최소화 하게 되었습니다.
