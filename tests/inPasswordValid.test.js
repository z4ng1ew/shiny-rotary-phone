import { isPasswordValid } from "../src/inPasswordValid";

test("Проверка валидации имени", ()=>{
 expect(isPasswordValid("Максим")).toEqual([true, ''])
})
test("Проверка валидации длины имени", ()=>{
  expect(isPasswordValid("677")).toEqual([false, 'имя не должно быть короче 6 символов и начинаться с маленькой буквы'])
 })

 test("Проверка button", ()=>{
  expect(isPasswordValid("Максим")).toEqual([true, ''])
 })
