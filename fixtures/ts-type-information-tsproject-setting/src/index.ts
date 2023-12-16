class MyClass {
  public log(): void {
    console.log(this)
  }
}

const instance = (new MyClass)
const myLog = instance.log
myLog()
