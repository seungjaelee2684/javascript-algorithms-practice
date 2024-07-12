function solution(today, terms, privacies) {
  const answer = [];

  // 들어온 today를 Date형식으로 바꿔줍니다.
  // YYYY.MM.DD 포멧도 지원해서 그냥 넣기만 하면 변환됩니다.
  const expire = new Date(today);

  // terms를 쉽게 찾기위해 객체화해줍니다.
  const termType = {};
  terms.forEach((item) => {
    // split() 메서드로 분리한 타입과 기간을
    // 구조 분해 할당으로 변수화 한다.
    const [type, term] = item.split(" ");

    // 타입에 기간이 얼만지 객체로 생성한다.
    // ex) 'A': 6
    termType[type] = Number(term);
  });

  // 개인정보 수집일자를 확인한다.
  privacies.forEach((item, idx) => {
    // 위와 마찬가지로 구조 분해 할당을 한다.
    const [date, type] = item.split(" ");

    // 구한 date는 new Date() 메서드를 통해 Date 형식으로 변환한다.
    const chDate = new Date(date);

    // 그리고 Date의 매서드인 setMonth를 이용해
    // chDate의 현재 달 + 타입의 기간을 더한 값을 구한다.
    chDate.setMonth(chDate.getMonth() + termType[type]);

    // 마지막으로 오늘 날짜와 구한 유효기간을 비교해
    // 유효기간이 오늘 보다 작거나 같으면 answer에 번호를 푸쉬해준다.
    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]