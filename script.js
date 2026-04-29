const data = [
    { name: "두 수의 곱 구하기", link: 120804, ans: "( num1, num2 ) => num1 * num2;" },
    { name: "두 수의 나눗셈", link: 120806, ans: "( num1, num2 ) => ~~( num1 * 1000 / num2 );" },
    { name: "숫자 비교하기", link: 120807, ans: "( num1, num2 ) => num1 - num2 ? -1 : 1;" },
    { name: "나머지 구하기", link: 120810, ans: "( num1, num2 ) => num1 % num2;" },
    { name: "나이 출력", link: 120820, ans: "age => 2023 - age;" },
    { name: "두 수의 차 구하기", link: 120803, ans: "( num1, num2 ) => num1 - num2; " },
    { name: "몫 구하기", link: 120805, ans: "( num1, num2 ) => Math.floor( num1 / num2 );" },
    { name: "머쓱이보다 키 큰 사람", link: 120585, ans: "( arr, height ) => arr.filter( a => a > height ).length;" },
    { name: "두 수의 합 구하기", link: 120802, ans: "( num1, num2 ) => num1 + num2;" },
    { name: "피자 나눠 먹기 (1)", link: 120814, ans: "n => Math.ceil( n / 7 );" },
    { name: "피자 나눠 먹기 (3)", link: 120816, ans: "( slice, n ) => Math.ceil( n / slice );" },
    { name: "배열의 평균값", link: 120817, ans: "numbers => numbers.reduce( ( a, b ) => a + b, 0 ) / numbers.length;" },
    { name: "아이스 아메리카노", link: 120819, ans: "m => [ ~~( m / 5500 ), m % 5500 ];" },
    { name: "배열 뒤집기", link: 120821, ans: "num_list => num_list.reverse();" },
    { name: "뒤집힌 문자열", link: 120822, ans: "my_string => my_string.split(\"\").reverse().join(\"\");" },
    { name: "짝수 홀수 개수", link: 120824, ans: "l => l.reduce( ( r, n ) => n % 2 ? [ r[0], r[1] + 1 ] : [ r[0] + 1, r[1] ], [ 0, 0 ] );" },
    { name: "문자 반복 출력하기", link: 120825, ans: "( str, n ) => str.split(\"\").map( char => char.repeat(n) ).join(\"\");" },
    { name: "특정 문자 제거하기", link: 120826, ans: "( str, char ) => str.replaceAll( char, \"\" );" },
    { name: "각도기", link: 120829, ans: "a => a < 90 ? 1 : a === 90 ? 2 : a < 180 ? 3 : 4;" },
    { name: "양꼬치", link: 120830, ans: "( n, k ) => n * 12000 + ( k - Math.floor( n / 10 ) ) * 2000;" }
];
data.forEach( aData => document.querySelector("dl").innerHTML += `<dt><a href="https://school.programmers.co.kr/learn/courses/30/lessons/${aData.link}">${aData.name}</a></dt><dd>const solution = ${aData.ans}</dd>` );