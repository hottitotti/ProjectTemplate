import * as types from './actionTypes'


export const createCard = (value) => ({
  type: types.CREATE_CARD,
  payload: {
    prob_title: text,
    prob_desc: text,
    username: 'Aidan Pie',
    resolved: false,
  },
})
//this is an action
/**
 * reducers actually update the state and they take two parameters :
 *    the current state
 *    the action
 * they return the updated state
 */

 export const deleteCard = () => ({
  type: types.DELETE_CARD,
  payload: {
    
  }
 })

export const CREATE_CARD = 'CREATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const SELECT_RESOLVED = 'SELECT_RESOLVED';
export const FILTERBY_ALL = 'FILTERBY_ALL';
export const FILTERBY_STATUS = 'FILTERBY_STATUS';
export const FILTERBY_USER = 'FILTERBY_USER';
export const FILTERBY_DATE = 'FILTERBY_DATE';