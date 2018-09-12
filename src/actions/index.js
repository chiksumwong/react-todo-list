//改變 state 的唯一的方式是發出一個 action，也就是一個描述發生什麼事的物件。
//Action 是一般的 JavaScript 物件。

//action 必須有一個 type 屬性，它代表被執行的 action 的類型。
//Type 通常應該被定義成字串常數。一旦你的應用程式夠大了，你能會想把它們移進一個單獨的 module。

//Actions
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}