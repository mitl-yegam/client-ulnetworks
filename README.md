### `1. npm install`

---

### `2. npm start`

`open localhost:3000`

![yegam_homepage](./yegam.png)

---

### `3. 디렉토리`

## ![directory_structure](./directory.png)

- assets: images, scss(style helper와 전체적인 틀을 설정한 scss 파일) 폴더
- components: 재사용 가능한 단위 모음
  - atoms: 제일 작은 단위의 컴포넌트
  - molecules: 두 개 이상 조합인 컴포넌트
  - organism: header, footer, layout 구성
- pages: 화면단위의 page 구성
- router: 화면 경로
- utils: util 폴더

### `4. 유지보수 Tip`

#### `회사소개`

- 주요고객사 로고 추가 및 삭제
  - 디렉토리: pages/comapany/company.json의 client 객체
  - 방법: json객체 데이터를 추가하거나 삭제한다.
    이미지의 경우 comapny.tsx파일의 clientImg에 추가하거나 삭제한다.
- 따뜻한 나눔 수정 및 추가
  - 디렉토리: pages/company/company.json의 share 객체
  - 방법: share에 객체를 추가하거나 수정한다.
    이미지의 경우 company.tsx파일의 shareImg에 추가하거나 수정한다.

#### `자주 묻는 질문`

- 자주 묻는 질문 수정 및 추가
  - 디렉토리: pages/qna/qna.json
  - 방법: json객체로 데이터를 추가하거나 수정한다.
