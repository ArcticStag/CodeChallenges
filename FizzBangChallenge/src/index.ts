export function checkFizzBang(number: number): string {
  if (
    number / 3 - Math.floor(number / 3) === 0 &&
    number / 5 - Math.floor(number / 5) === 0
  )
    return 'FizzBang'
  if (number / 5 - Math.floor(number / 5) === 0) return 'Bang'
  if (number / 3 - Math.floor(number / 3) === 0) return 'Fizz'
  return number.toString()
}

export function main(): void {
  for (let i = 1; i < 100; i++) {
    console.log(checkFizzBang(i))
  }
}

main()
