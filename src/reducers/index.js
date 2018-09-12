import { combineReducers } from 'redux'

//Reducers
/* 要指定 state tree 如何藉由 action 來轉變，你必須撰寫 pure reducer。 */
/* Reducer 只是 pure function，它取得先前的 state 和一個 action，並回傳下一個 state。*/
/* 請記得要"回傳"(return)一個新的 state 物件，而不要去改變先前的 state。*/
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/* 
* Store 
* 整個應用程式的 state，被儲存在一個樹狀物件放在唯一的 store 裡面。
*/
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp