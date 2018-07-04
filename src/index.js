import Vue from 'vue'
import ToastList from './ToastList'

let toastList

export default function (arg) {
  if (!toastList) {
    toastList = new Vue(ToastList)
  }

  const toast = typeof arg === 'string'
    ? { message: arg }
    : arg

  toastList.add(toast)
}
