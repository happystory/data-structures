class myArray {

  main() {
    const arr = new Array(10);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = i;
    }
    console.log(arr);
  }
}

new myArray().main()