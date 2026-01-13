import React from 'react';
import MenuList from './MenuList'; // MenuList가 같은 폴더에 있다고 가정

export default function App06() {
  const menus = {
    adults: ["맥주", "와인", "위스키"],
    child: ["우유", "주스", "사이다"]
  };

  const user = {
    name: "홍길동",
    age: 11,
  };

  let title;
  let menuKey;

  if (user.age > 19) {
    title = "어른용 메뉴";
    menuKey = "adults";
  } else {
    title = "어린이 메뉴";
    menuKey = "child";
  }

  return (
    <div>
      <h1>연습문제</h1>
      {/* MenuList에 user의 age를 고려하여 props 전달 */}
      <MenuList title={title} menus={menus[menuKey]} />
    </div>
  );
}
