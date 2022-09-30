// todo 입력 공간 가져오기
const todoInput = document.querySelector("#todo-form #todo")

// todo button : click 이벤트로 실행 
// button에 아이디를 주지않았기때문에, 노드로 접근을하거나.
// querySelector를 이용하여 선택자를 이용하여 접근해서 객체를 가져온다
const todoButton = todoInput.nextElementSibling;

// todo board 객체 가져오기
const todoBoard = document.querySelector("#todo-board");

// 버튼에 이벤트 리스너 : button 이므로 click이벤트
todoButton.addEventListener("click", addTodo);

function addTodo() {
    //console.log("확인");
    // todoInput -value 값을 들고옴
    const text = todoInput.value;


    // 새로 요소 생성
    // li , input type="checkbox", textNode, button
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textNode = document.createTextNode(text);
    const button = document.createElement("button");

    // li요소 - input, textNode, button 추가
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    // todoBoard - li 추가
    todoBoard.append(li);
        
    // todoInput.value값을 빈값으로 만들기
    // button에 X 문자열 추가
}
